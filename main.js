canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d"); 

 racecar2_width= 120;
 racecar2_height= 70;
 racecar2_image= "racecar2.png";
 racecar2_x=10;
 racecar2_y=10;

 car2_width= 120;
 car2_height= 70;
 car2_image= "car2.png";
 car2_x=10;
 car2_y=100;
 



function add() {

    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src = track.jpg;

    racecar2_imgTag= new Image();
    racecar2_imgTag = uploadcar1 ;
    racecar2_imgTag = racecar2_image;

    car2_imgTag= new Image();
    car2_imgTag = uploadcar2 ;
    car2_imgTag = car2_image;
}

function uploadBackground() {

    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width, canvas.height );
}

function uploadracecar2() {

    ctx.drawImage(racecar2_imgTag, racecar2_x , racecar2_y , racecar2_width , racecar2_height);
}

function uploadcar2() {

    ctx.drawImage(car2_imgTag, car2_x , car2_y , car2_width , car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{


    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }


    if(keyPressed == '40')
    {

        down();
        console.log("down");
    }

    if(keyPressed == '37')

    {

       left();
       console.log("left");
    }


    if(keyPressed == '39')

    {


        right();
        console.log("right")
    }





}


