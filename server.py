
import numpy as np
from numpy import array
from skimage.measure import block_reduce
import matplotlib.pyplot as plt
import scipy

from flask import Flask, jsonify, render_template, request, redirect
app = Flask(__name__)


@app.route('/snap_a_signal', methods=["POST", "GET"])
def process_signal():
    pixels = request.get_json()
    print type(pixels)
    print pixels

    #pixels = request.args.get('canvas2', 0, type=int)
    return jsonify(result=im2speech(pixels))

@app.route('/')
def root():
    return render_template('index.html')

def im2speech(pixels):
    return pixels

if __name__ == "__main__":
    app.run(debug=True)
