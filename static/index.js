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
	context2.drawImage(video, 0, 0, 420, 340);
    send_canvas_ctx();
	$("#res").show();
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
    input_data = canvas2.toDataURL('image/png');
	window.fetch('/snap_a_signal', {
  		method: 'POST',
  		headers: {
    		'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
    		data: input_data
  		})
	}).then((response) => response.json()).then((json) => console.log(json))
}

function canvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}

