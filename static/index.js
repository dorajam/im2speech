
var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');
var video = document.getElementById('video');

navigator.mediaDevices.getUserMedia( {video: true})
    .then((stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }).catch((err) => {console.log(err);});


// Take photo
document.getElementById("snap").addEventListener("click", function() {
	context2.drawImage(video, 0, 0, 320, 240);
});

function ping() {
	window.fetch('/snap_a_signal')
	  .then(function(response) {
		      return response.text()
		    }).then(function(body) {
				console.log(body);
		    });
}

// Send pixels to Flask backend
function send_canvas_ctx() {
	window.fetch('/snap_a_signal', {
  		method: 'POST',
  		headers: {
    		'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
    		data: $('#canvas2')
  		})
	}).then((response) => response.json()).then((json) => console.log(json))
}


// creates new canvas element for the photo taken
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height
    canvas.getContext("2d").drawImage(image,0,0);
    return canvas;
}

function canvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}

