function setup() {
    canvas = createCanvas(620, 465);
    canvas.position(810, 265);
    
    video = createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
    image(video, 0, 0, 620, 465)
}

function modelLoaded() {
    console.log("Model is loaded.")
}