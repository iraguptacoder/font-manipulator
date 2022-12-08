nosex = 0;
nosey = 0;
difference = 0;
leftwristx = 0;
rightwristx = 0;
function setup(){
    canvas = createCanvas(750,450);
    canvas.position(520,80);
    video = createCapture(VIDEO);
    video.size(500,500);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex , nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        console.log(" leftwrist " + leftwristx + " rightwristx " + rightwristx);
        difference = floor(leftwristx - rightwristx);
    }
}

function draw(){
    background("#969A97");
    document.getElementById("squareside").inerHTML = "text size = " + difference + "px";
    fill("#F90093");
    stroke("#F90093");
    textSize(difference);
    text("tang", nosex, nosey);
}