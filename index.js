
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

// Send pixels to Flask backend
$(function() {
    $('#snap').bind('#click', function() {
        console.log('hello');
      $.getJSON($SCRIPT_ROOT + '/snap_a_signal', {
        pixel_array: $('#canvas2').val(),
      }, function(data) {
        $("#result").text(data.result);   // result = function(im2speech) returns audio signal
      });
      return false;
    });
  });


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

