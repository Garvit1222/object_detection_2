status = ""

function preload()
{
    img = loadImage('Image1.jpeg')
}

function setup()
{
    canvas = createCanvas(600,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,350);
    video.hide();
}

function start()
{
    objectdetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "detecting objects";
}

function modelloaded()
{
    console.log("modelloaded");
    status = true;
  
}

function gotresult(error,results)
{
    if(error)
    {
        console.log("error");
    }
        console.log("results");

    objects = results;

    
}   

