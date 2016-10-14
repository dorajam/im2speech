
var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
var video = document.getElementById('video');

navigator.mediaDevices.getUserMedia( {video: true})
    .then((stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }).catch((err) => {console.log(err);});


// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context2.drawImage(video, 0, 0, 640, 480);
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
