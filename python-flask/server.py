from flask import Flask, request

app = Flask("app")

@app.route("/", methods=['GET', 'POST'])
def homePage():
    if(request.method == 'GET'):
        return "Hello Unknown Get Requester. Success from the Python Server"

app.run(host="127.0.0.1", port="7070")