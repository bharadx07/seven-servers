from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask("app")
cors = CORS(app)

@app.route("/", methods=['GET', 'POST'])
@cross_origin()
def homePage():
    if(request.method == 'GET'):
        return "Hello Unknown Get Requester. Success from the Python Server"
    elif(request.method == "POST"):
        NAME = request.json["name"]
        send_string = f"Hello {NAME}. Your are a Post Requester. Success from the Python Server"
        return send_string
    return '404'

app.run(host="127.0.0.1", port="7070")

