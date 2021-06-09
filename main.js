var keyPressed;
var canvas = new fabric.Canvas('myCanvas');
var block_width = 30;
var block_height = 30;
var player_x = 0;
var player_y = 0;
var player_object = "";
var block_object = "";
function player_update(){
    fabric.Image.fromURL("player.webp", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and Shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and Shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed == '70') { new_image('spiderman_face.png'); console.log("F");}
    if(keyPressed == '66') { new_image('ironman_body.png'); console.log("B");}
    if(keyPressed == '76') { new_image('hulk_legs.png'); console.log("L");}
    if(keyPressed == '82') { new_image('thor_right_hand.png'); console.log("R");}
    if(keyPressed == '72') { new_image('ironman_left_hand.png'); console.log("H");}
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}