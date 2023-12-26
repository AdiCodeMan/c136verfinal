status="";
video = "";

function setup()
{
    canvas = createCanvas(450, 320);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDectector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
}

function draw()
{
    image(video, 0, 0, 450, 320);
}