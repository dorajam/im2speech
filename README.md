## Listen to your eyes!

This is a webapp that uses [wavenets](https://arxiv.org/pdf/1609.03499.pdf) - a text2speech model - that generates audio signals based on some text input from an image or video frame!    
1. Run the web app by ```python run.py```    
2. Take a snap (this gets fed into the network)    
3. The Flask backend will do the work: convert pixels into text, text into generating audio signals     
4. Send audio signals back to front-end    
5. Enjoy!    

#### DONE
- [x] OCR (Optical Character Recognition) set up to translate any image to text  
- [x] Webcam enabled by getUserMedia to take input from your cam
- [x] Flask server set up -> Ajax can now communicate between front and back-end
- [x] Front-end done -> you can take a snap now and see what image will get fed into the network

####TODOs
- [ ] Save images to feed into model? Not sure what's up here just yet. 
- [ ] Set up wavenets for generating audio signals
- [ ] Feed the text input into wavenets, and see what it generates (should be a human-like sound!)
- [x] fix the ugly CSS


Ignore this line: ```python -mSimpleHTTPServer 8000 .```

