import os
from config.firebase import db
from flask import Flask, render_template, request

# data = {
#     "age": 24,
#     "name": "choi",
#     "date": "2020.12.03"
# }

# db.child("name").child("name").update(data)

app = Flask(__name__)


@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


@app.route("/")
def home():
    return render_template('index.html')


@app.route("/check", methods=["POST"])
def check():
    value = request.form['insta_id']
    return value


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
