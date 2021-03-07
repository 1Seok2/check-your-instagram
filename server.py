import os
from flask import Flask, render_template, request

from crawler.crawler_instagram import crawler_instagram

app = Flask(__name__)


@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


@app.route("/")
def home():
    return render_template('index.html')


@app.route("/update", methods=["POST"])
def check():
    insta_id = request.form['insta_id']

    crawler_instagram(insta_id)


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
