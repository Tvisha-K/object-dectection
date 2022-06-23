img= "";

model_status = "";

function setup(){

    canvas = createCanvas(640,420);

    canvas.center();

    cocossd = ml5.objectDetector("cocossd",modelLoaded);

}
function preload(){

    img = loadImage("dog_cat.jpg");

}

function modelLoaded(){

    console.log("model has been loaded successfully");

    model_status = true;

    cocossd.detect(canvas, gotResults);

}
  

function draw(){

    image(img,0,0,640,420);

    fill("red");

    stroke("red");

    textSize(20);

    text("Dog",220,60);

    text("Cat", 320 ,100);

    noFill();

    rect(100,70,300,320);

    stroke("yellow");

    rect(280,80,300,300);


}

function gotResults(e,r){

    if (e){

       console.error(e) 

    }

    else{

        console.log(r);

    }

}
