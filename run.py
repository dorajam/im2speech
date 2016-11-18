# Flask back-end: take image -> get text -> generate audio signals => send back to client

from flask import Flask, jsonify, render_template, request, redirect
app = Flask(__name__)

@app.route('/snap_a_signal', methods=["POST", "GET"])
def process_signal():
    pixels = request.args.get('canvas2', 0, type=int)
    return jsonify(result=im2speech(pixels))

@app.route('/')
def root():
    return render_template('index.html')

def im2speech(pixels):
    return pixels

if __name__ == "__main__":
    app.run(debug=True)
