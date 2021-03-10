import os
from flask import Flask, render_template, request, jsonify, send_from_directory
from crawler.crawler_instagram import crawler_instagram
from config.firebase import get_data_by_id


root_dir = os.path.dirname(os.getcwd())
my_path = os.path.join(root_dir, 'check-your-instagram', 'app', 'public')
app = Flask(__name__, static_folder=os.path.abspath(my_path))


def update(insta_id):
    result = 'ok'
    try:
        crawler_instagram(insta_id)
    except Exception as e:
        print(e)
        result = 'fail'

    data = {
        "result" : result
    }
    return jsonify(data)


def search(insta_id):
    result = {}
    try:
        result = get_data_by_id(insta_id)
    except Exception as e:
        print(e)

    return jsonify(result)


@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def home(path):
    insta_id = request.args.get('insta_id')
    if path == 'update':
        return update(insta_id)
    elif path == 'search':
        return search(insta_id)
    else:
        return send_from_directory(my_path, filename='index.html')


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(host="localhost", port=8080, debug=True)
