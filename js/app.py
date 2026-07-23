from flask import Flask, render_template

app = Flask(__name__)


song_list = [
    {
        "name": "111",
        "url": "7.mp3",
        "type": "local"
    },

    {
        "name": "我的本地歌曲",
        "url": "test.mp3",
        "type": "local"
    }
]

@app.route('/')
def index():
    return render_template("index.html", songs=song_list)

if __name__ == '__main__':
    app.run(debug=True)