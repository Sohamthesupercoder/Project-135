var status;
var loaded
function preload(){
img = loadImage("background.jpeg");
}

function setup(){
canvas = createCanvas(700,500);
canvas.center();
video = createCapture(VIDEO);
video.hide()
objectdetector = ml5.objectDetector('cocossd' , modelloaded);
}

function draw(){
  if(status != "" && loaded != ""){

    image(video,0,0,700,500);
    objectdetector.detect("video" , gotresults);

    function gotresults(results , error){
    if(error){
      console.log(error);
    }else {
      console.log(results)
    }
    }
  }

}

function start_command(){

    status = "true"

}

function modelloaded(){
    console.log("loaded");
    loaded = "abc"
}