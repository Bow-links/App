<div align="center">

<img src="https://avatars.githubusercontent.com/u/128938231?s=200&v=4" />

</div>

# Bow - An open source profile bio and links manager website
Bow helps you to introduces you in 2 lines and group you social network links in one place.

## Screenshots
Dashboard
<img src="/.github/screenshots/screen_dashboard.png">
<br>
<br>
Example user page
<img src="/.github/screenshots/screen_profile.png"/>
<br>
<br>
Register
<img src="/.github/screenshots/screen_register.png"/>

## Self-hosting

### Configuration
`data/config.json` (template at data/config.sample.json)
```json
{
  "default": "/register",
  "url": "http://my-bow.com",
  "database": {
    "url": "mongodb+srv://user:pass@my-mongo.com"
  }
}
```
`data/links.json` (template at data/links.sample.json)
```json
{
  "templates": {
    "github": {
      "base_url": "https://github.com/",
      "icon": "/static/icons/gh.svg",
      "name": "Github"
    },
    [...]
  }
}
```


You're ready to start !

### Using docker
```shell
git clone https://github.com/tryon-dev/Bow
```

[//]: # (https://github.com/bow-links/Bow //TODO move git)


```shell
docker-compose up -d
```
Now, go to http://localhost:5000

### Docker without cloning git

Copy Dockerfile content
```Dockerfile
FROM python:3-bullseye

RUN apt install git
RUN echo "cd / && git clone https://\$USER:\$TOKEN@github.com/tryon-dev/Bow app && cd app && pip install pip --upgrade && pip install -r requirements.txt && python main.py" > run.sh
EXPOSE 5000:5000
WORKDIR /
CMD ["bash", "run.sh"]
```

Build and run...
```shell
docker build -f Dockerfile -t bow . && docker run -d bow
```

## Contribute

### Open an issue
Open an issue with a bug, an enhencement idea...

### Fork, resolve and PR
1. Fork the repository and create a new branch.
2. Go to the [issue page](https://github.com/tryon-dev/Bow/issues) and choose which one to resolve
3. Code hard
4. Open a Pull Request on this repository !
5. Thanks 🙏
