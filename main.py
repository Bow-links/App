import hashlib
import json
import os
import re
import secrets
import pymongo
import requests
from flask import Flask, render_template, request, make_response, redirect
from secrets import compare_digest

app = Flask('Bow Links')
config = json.loads(open('data/config.json', 'r').read())
database = pymongo.MongoClient(config['database']['url']).Bow


def get_user(username):
    return database.users.find_one({'username': username})


def is_username_used(username):
    return database.users.find_one({'username': username}) is not None


def add_user(username, name, email, image, description, password):
    user = {
        "username": username,
        "email": email,
        "name": name,
        "image": image,
        "description": description,
        "background": "/static/background.png",
        "token": secrets.token_urlsafe(32),
        "password": str(hashlib.scrypt(password.encode(), salt=username.encode(), n=4, r=10, p=2)),
        "premium": False
    }
    database.users.insert_one(user)

    add_link(username, 'Bow Profile', f"{config['url']}/@{username}", "/static/icons/bow.svg", 'bow')
    add_link(username, 'Bow Website', f"{config['url']}", "/static/icons/bow.svg", 'bow')
    pin_link(username, f"https://{config['url']}/{username}")


def is_user_right(username, password):
    user = database.users.find_one({'username': username})
    if user['password'] == str(hashlib.scrypt(password.encode(), salt=username.encode(), n=4, r=10, p=2)):
        return True, user
    return False, {}


def is_right_token(token):
    user = database.users.find_one({'token': token})
    if compare_digest(user['token'], token):
        return True, user
    return False, {}


def get_links(username):
    return database.pins.find_one({'username': username}), database.links.find({'username': username})


def add_link(username, name, link, icon, tag='custom'):
    if tag == 'discord':
        name = 'Discord — Account'
    if tag == 'discord-server':
        code = link.split('/')[-1]
        guild = requests.get(f'https://discord.com/api/invites/{code}').json()
        guild_name = guild['guild']['name']
        name = f'Discord — {guild_name}'
        link = f'https://dicord.gg/{code}'
    link = {
        "link": link,
        "name": name,
        "icon": icon,
        "type": tag,
        'username': username
    }
    database.links.insert_one(link)


def update_profile(username, background, image, name, description):
    user = {
        "name": name,
        "image": image,
        "description": description,
        "background": background
    }
    database.users.update_one({'username': username}, {'$set': user})


def del_link(username, link):
    database.links.delete_one({'link': link, 'username': username})


def pin_link(username, link):
    old_pinned_object = database.pins.find_one({'username': username})
    link_object = database.links.find_one({'link': link, 'username': username})

    database.links.delete_one(link_object)
    database.pins.delete_one({'username': username})

    database.pins.insert_one(link_object)
    if old_pinned_object not in [{}, None]:
        database.links.insert_one(old_pinned_object)


def get_icons_links_types_and_backgrounds():
    templates = json.loads(open('data/links.json').read())['templates']
    links_types = [(link_type, templates[link_type]) for link_type in templates.keys()]
    icons = [(f"/static/icons/{icon}", icon) for icon in os.listdir('static/icons/')]
    backgrounds = [(f"/static/backgrounds/{background}", background.split('.')[0]) for background in os.listdir('static/backgrounds/')]
    return icons, links_types, backgrounds


def get_link_templates():
    return json.loads(open('data/links.json').read())['templates']


@app.route('/')
def index():
    return redirect(config['default'])


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        form = request.form
        username = form.get('username')
        email = form.get('email')
        password = form.get('password')
        username = re.sub("[^a-z0-9_.]", "", username)
        if is_username_used(username):
            return render_template('register.html', message='Username is already used by someone !')
        add_user(username, username, email, '/static/default-avatar.png', '', password)
        _, user = is_user_right(username, password)
        response = make_response(redirect('/dashboard'))
        response.set_cookie('token', user['token'])
        return response
    return render_template('register.html')


@app.route('/@<user>')
def page(user):
    pinned, links = get_links(user)
    user = get_user(user)
    return render_template('index.html', pin=pinned, links=list(links), user=user['name'], description=user['description'], image=user['image'], background=user['background'])


@app.route('/dashboard', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        if request.cookies.get('token'):
            right, user = is_right_token(request.cookies.get('token'))
            if right:
                pinned, links = get_links(user['username'])
                icons, link_templates, backgrounds = get_icons_links_types_and_backgrounds()
                return render_template('dashboard.html', pin=pinned, links=links, user=user['name'], username=user['username'], description=user['description'], image=user['image'], links_types=link_templates, icons=icons, backgrounds=backgrounds, background=user['background'])
        return render_template('login.html')
    else:
        username = request.form.get('username')
        password = request.form.get('password')
        right, user = is_user_right(username, password)
        response = make_response(redirect('/dashboard'))
        if right:
            response.set_cookie('token', user['token'])
        return response


@app.route('/d/add', methods=['POST'])
def add_a_link():
    right, user = is_right_token(request.cookies.get('token'))
    if right:
        if request.args.get('template') is not None:
            if request.args.get('template') == 'true':
                possibles_templates = get_link_templates()
                template = possibles_templates[request.form.get('service')]
                username = request.form.get('username')
                url = template['base_url'] + username
                icon = template['icon']
                name = f"{template['name']} — {username}"
                tag = list(possibles_templates.keys())[list(possibles_templates.values()).index(template)]
                add_link(user['username'], name, url, icon, tag=tag)
                return redirect('/dashboard')
        name = request.form.get('name')
        link = request.form.get('link')
        icon = request.form.get('icon')
        add_link(user['username'], name, link, icon)
    return redirect('/dashboard')


@app.route('/d/del')
def delete_link():
    right, user = is_right_token(request.cookies.get('token'))
    if right:
        link = request.args.get('link')
        if link is not None:
            del_link(user['username'], link)
    return redirect('/dashboard')


@app.route('/d/pin')
def add_pin_link():
    right, user = is_right_token(request.cookies.get('token'))
    if right:
        link = request.args.get('link')
        if link is not None:
            pin_link(user['username'], link)
    return redirect('/dashboard')


@app.route('/d/update')
def update_settings():
    right, user = is_right_token(request.cookies.get('token'))
    if right:
        background = request.args.get('background')
        profile_picture = request.args.get('pdp')
        name = request.args.get('name')
        description = request.args.get('desc')
        if background is not None and profile_picture is not None and name is not None and description is not None:
            update_profile(user['username'], background, profile_picture, name, description)
    return redirect('/dashboard')


@app.errorhandler(Exception)
def error(_):
    return render_template('error.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
