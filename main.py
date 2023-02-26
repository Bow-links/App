import hashlib
import json
import os

from flask import Flask, render_template, request, make_response, redirect


app = Flask('Tryon - liens')
config = json.loads(open('data/config.json', 'r').read())


def get_user(username):
    return json.loads(open('data/users.json').read())['users'][username]


def is_user_right(username, password):
    users = json.loads(open('data/users.json').read())
    if username in users['users'].keys():
        if users['users'][username]['password'] == str(hashlib.scrypt(password.encode(), salt=username.encode(), n=4, r=10, p=2)):
            return True, users['users'][username]
    return False, {}


def is_right_token(token):
    users = json.loads(open('data/users.json').read())['users']
    for user in users.keys():
        if users[user]['token'] == token:
            return True, users[user]
    return False, {}


def get_links(user):
    links = json.loads(open('data/links.json').read())
    return links['pinned'][user], links['registered'][user]


def add_link(user, name, link, icon, tag='custom'):
    links = json.loads(open('data/links.json').read())
    link = {
        "link": link,
        "name": name,
        "icon": icon,
        "tag": tag
    }
    links['registered'][user].append(link)
    open('data/links.json', 'w').write(json.dumps(links))


def del_link(user, link):
    links = json.loads(open('data/links.json').read())
    for link_object in links['registered'][user]:
        if link_object['link'] == link:
            links['registered'][user].pop(links['registered'][user].index(link_object))
    open('data/links.json', 'w').write(json.dumps(links))


def pin_link(user, link):
    links = json.loads(open('data/links.json').read())
    old_link_object = None
    for link_object in links['registered'][user]:
        if link_object['link'] == link:
            old_link_object = link_object
            links['registered'][user].pop(links['registered'][user].index(link_object))
    links['pinned'][user] = old_link_object
    open('data/links.json', 'w').write(json.dumps(links))


def get_icons_and_links_types():
    templates = json.loads(open('data/links.json').read())['templates']
    links_types = [(link_type, templates[link_type]) for link_type in templates.keys()]
    icons = [(f"/static/icons/{icon}", icon) for icon in os.listdir('static/icons/')]
    return icons, links_types


def get_link_templates():
    return json.loads(open('data/links.json').read())['templates']


@app.route('/')
def index():
    return redirect(config['default'])


@app.route('/<user>')
def page(user):
    pinned, links = get_links(user)
    user = get_user(user)
    return render_template('index.html', pin=pinned, links=links, user=user['name'], description=user['description'], image=user['image'])


@app.route('/dashboard', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        if request.cookies.get('token'):
            right, user = is_right_token(request.cookies.get('token'))
            if right:
                pinned, links = get_links(user['username'])
                icons, link_templates = get_icons_and_links_types()
                return render_template('admin.html', pin=pinned, links=links, user=user['name'], description=user['description'], image=user['image'], links_types=link_templates, icons=icons)
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
                name = f"{template['name']} - {username}"
                tag = list(possibles_templates.values()).index(template)
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


@app.errorhandler(Exception)
def error(_):
    return render_template('error.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
