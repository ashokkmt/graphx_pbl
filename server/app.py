from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app) 

@app.route("/home")
def hello():
    return "Hello"

@app.route("/activity", methods=["POST"])
def output():
    data = request.get_json()  
    print(data)
    return jsonify({"message": "Data received", "received_data": data})

if __name__ == "__main__":
    app.run(debug=True)
