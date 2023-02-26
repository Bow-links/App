import hashlib
import json
import secrets
from getpass import getpass


if __name__ == '__main__':
    print('Ajout d\'un nouvel utilisateur')
    username = input('Nom d\'utilisateur >>> ')
    name = input('Nom complet >>> ')
    desc = input('Description >>> ')
    image = input('Lien de l\'image >>> ')
    mpd = getpass("Mot de passe >>>")
    print(f"Création de {username}")

    users = json.loads(open('data/users.json').read())

    users['users'][username] = {
        "username": username,
        "name": name,
        "image": image,
        "description": desc,
        "background": "/static/background.png",
        "token": secrets.token_urlsafe(32),
        "password": str(hashlib.scrypt(mpd.encode(), salt=username.encode(), n=4, r=10, p=2))
    }

    open('data/users.json', 'w').write(json.dumps(users))
    print("Fini.")

