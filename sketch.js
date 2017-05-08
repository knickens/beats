var myMusic;
var kiRed = 100;
var kiGreen = 50;
var kiBlue = 100;
var x = 50;
var y = 60;
var speedx;
var speedy;




function preload(){
    myMusic = loadSound('js/rodneybeats2.mp3');
}


function setup(){
  createCanvas(900,900);
  background(255);
}

function draw(){
    kiBlue = random(0,255);
    kiRed = random(0,255);
    kiGreen = random(0,255);
    fill(kiRed,kiGreen,kiBlue);
   triangle(mouseX,mouseY,100,25,50,50); 

}




function mouseClicked(){
     if(myMusic.isPlaying()){
         myMusic.pause(); 
     }
     else{
        myMusic.play();   
     }
 } 


// function mouseReleased(){
//  myMusic.pause();   
// }

