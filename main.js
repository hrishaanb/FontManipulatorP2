function setup () {
    canvas = createCanvas(400, 400);
    canvas.position(575, 250);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(30, 250);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
var input = "";
function nextPage () {
    input = document.getElementById("input").value;
    if (input == "") {
        input = "Nothing";
    }
    console.log(input);
    document.getElementById("input").innerHTML = "";
}
function modelLoaded () {
    console.log("PoseNet is initialized");
}
function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
    }
}
function draw () {
    background("#7b95a8");
}