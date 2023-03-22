FROM python:3-alpine

WORKDIR /app
COPY . .
RUN pip install pip --upgrade && pip install -r requirements.txt

EXPOSE 5000:5000
CMD ["python", "main.py"]
