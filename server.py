import os
from flask import Flask, render_template, request, jsonify, send_from_directory

from crawler.crawler_instagram import crawler_instagram

app = Flask(__name__)


@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


@app.route("/")
def home():
    # return render_template('index.html')
    return send_from_directory('./app','index.html')


@app.route("/update", methods=["GET"])
def update():
    insta_id = request.args.get('insta_id')
    crawler_instagram(insta_id)

    data = {
        "insta_id" : insta_id
    }
    return jsonify(data)

@app.route("/hello", methods=["GET"])
def hello():
    return "hello"


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
