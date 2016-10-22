# Flask back-end: take image -> get text -> generate audio signals => send back to client

from flask import Flask, jsonify, render_template, request
app = Flask(__name__)

@app.route('/snap_a_signal')
 def process_signal():
    pixels = request.args.get('canvas2', 0, type=int)
    return jsonify(result=im2speech(pixels))

@app.route('/')
def index():
    return render_template('index.html')


def im2speech(pixels):
    print type(pixels)

if __name__ == "__main__":
    app.run(debug=True)
