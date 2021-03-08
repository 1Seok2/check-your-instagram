import os
from flask import Flask, render_template, request, jsonify, send_from_directory
from crawler.crawler_instagram import crawler_instagram

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


def update(insta_id):
    crawler_instagram(insta_id)

    data = {
        "insta_id" : insta_id
    }
    return jsonify(data)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def home(path):
    # return render_template('index.html')
    if path == 'update':
        insta_id = request.args.get('insta_id')
        update(insta_id)
    else :
        return send_from_directory('./app/public/', 'index.html')


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
