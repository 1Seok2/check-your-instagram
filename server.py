import os
from config.firebase import db
from flask import Flask, render_template

# data = {
#     "age": 24,
#     "name": "choi",
#     "date": "2020.12.03"
# }

# db.child("name").child("name").update(data)

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
