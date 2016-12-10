from StringIO import StringIO
import numpy as np
from numpy import array
from skimage.measure import block_reduce
import matplotlib.pyplot as plt
import scipy
from base64 import decodestring

import ssl
context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
context.load_cert_chain('fullchain.pem', 'privkey.pem')

try:
    import Image
except ImportError:
    from PIL import Image
    import pytesseract

from flask import Flask, jsonify, render_template, request, redirect
app = Flask(__name__)


@app.route('/snap_a_signal', methods=["POST", "GET"])
def process_signal():
    pixels = request.get_json()['data']

    return jsonify(result=im2speech(pixels))


@app.route('/')
def root():
    return render_template('index.html')


def im2speech(pixels):
    fh = open("imageToSave.png", "wb")
    fh.write(str(pixels.split(",")[1].decode('base64')))
    fh.close()
    text =  pytesseract.image_to_string(Image.open('imageToSave.png'))
    return text

if __name__ == "__main__":
    context = ('fulchain.pem', 'privkey.pem')
    app.run(host='0.0.0.0', port=8000, ssl_context=context)
