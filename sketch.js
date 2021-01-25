var canvas;
var music;
var Block1,Block2,Block3,Block4;
var Box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    Block1=createSprite(60,590,220,50);
    Block1.shapeColor="blue";
    
     

    Block2=createSprite(285,590,180,50);
    Block2.shapeColor="green";
    


    Block3=createSprite(500,590,180,50);
    Block3.shapeColor="yellow";
    

    Block4=createSprite(720,590,180,50);
    Block4.shapeColor="Red";
    

    //create box sprite and give velocity
 
    Box=createSprite(random(20,720),200,50,50);
    Box.shapeColor="white";
    Box.velocityX=5;
    Box.velocityY=5;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Edges=createEdgeSprites();
    Box.bounceOff(Edges);
    
    
   
    //add condition to check if box touching surface and make it box
    if(Block1.isTouching(Box) && Box.bounceOff(Block1)){
        Box.shapeColor="blue";
        music.play();
    }
    
    if(Block2.isTouching(Box) && Box.bounceOff(Block2)){
        Box.shapeColor="green";
        
    }

    if(Block3.isTouching(Box) && Box.bounceOff(Block3)){
        Box.shapeColor="yellow";
       
    }

    if(Block4.isTouching(Box) && Box.bounceOff(Block4)){
        Box.shapeColor="red";
        music.stop();
        Box.velocityX=0;
        Box.velocityY=0;
    }







    drawSprites();
}
