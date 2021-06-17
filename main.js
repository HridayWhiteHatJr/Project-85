canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_img = "road.jpeg";

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;

function add() {
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_img;

    car1_ImgTag = new Image();
    car1_ImgTag.onload = uploadcar1;
    car1_ImgTag.src = car1_image;

    car2_ImgTag = new Image();
    car2_ImgTag.onload = uploadcar2;
    car2_ImgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right arrow key");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("w");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("a");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("s");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("d");
    }
}

function car1_up() {

    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow key is pressed, X = " + car1_x + " , Y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {

    if (car1_y <= 700) {
        car1_y = car1_y + 10;
        console.log("When down arrow key is pressed, X = " + car1_x + " , Y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {

    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow key is pressed, X = " + car1_x + " , Y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {

    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow key is pressed, X = " + car1_x + " , Y = " + car1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    if (car1_x > 700) {
        console.log("car1 won");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    }
}

function car2_up() {

    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When W key is pressed, X = " + car2_x + " , Y = " + car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {

    if (car2_y <= 700) {
        car2_y = car2_y + 10;
        console.log("When S key is pressed, X = " + car2_x + " , Y = " + car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {

    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When A key is pressed, X = " + car2_x + " , Y = " + car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {

    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When D key is pressed, X = " + car2_x + " , Y = " + car2_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    if (car2_x > 700) {
        console.log("car2 won");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!";
    }
}