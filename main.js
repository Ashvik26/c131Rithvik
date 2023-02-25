function preload(){
    img=loadImage("bedroom.avif");
    }
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    }
    function draw(){
    image(img,0,0,640,420);
    fill("light blue");
    text("bed",85,60);
    noFill();
    stroke("light blue");
    rect(75,50,500,350);
    }