function setup(){
    
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()

   
}
function draw(){
    image(video,200,200,240,180);
    
   fill("red");
    rect(195, 150, 250, 55, 20);
    fill("skyblue");
    rect(195, 150, 55, 250, 20);
    fill("lightgreen");
    rect(195, 350, 250, 55, 20);
    fill("skyblue");
    rect(395, 150, 55, 250, 20);
}
