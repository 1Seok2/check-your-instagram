import os
from flask import Flask, render_template, request, jsonify, send_from_directory
from crawler.crawler_instagram import crawler_instagram

# my_path = '/Users/choewonseog/Documents/check-your-instagram/app/public'
# my_path = 'C:/Users/goesnow/Documents/study/check-your-instagram/app/public'

root_dir = os.path.dirname(os.getcwd())
my_path = os.path.join(root_dir, 'check-your-instagram', 'app', 'public')
app = Flask(__name__, static_folder=os.path.abspath(my_path))


def update(insta_id):
    crawler_instagram(insta_id)

    data = {
        "insta_id" : insta_id
    }
    return jsonify(data)


@app.errorhandler(404)
def page_not_found():
    return render_template('404.html')


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def home(path):
    if path == 'update':
        insta_id = request.args.get('insta_id')
        update(insta_id)
    # elif path == '':
    else:
        print()
        return send_from_directory(my_path, filename='index.html')


if __name__ == "__main__":
    print("-" * 60)
    print("  server is start")
    print("-" * 60)

    app.run(debug=True)
