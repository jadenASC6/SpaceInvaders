let x = 300; // ship
let y = 515; // ship
let bullet = {
    x,
    y: 515
}
let fire = false
let c1 = "white"
let c2 = "white"
let c3 = "white"
let c4 = "white"
let c5 = "white"
let c6 = "white"


function setup() {
    createCanvas(600,600);
    background(0, 0, 0);
}


function draw() {
    background(0, 0, 0);
    if (fire == true){
        fill("white")
        circle(bullet.x + 20, bullet.y, 10)
        bullet.y -= 10
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 10;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        x += 10;
    }
    if (keyIsDown(32)) {
         fire = true;
         if (bullet.y = 515) {
            bullet.x = x
        }
     }
    if (x <= 0) {
        x = 0;
    } else if (x >= 560) {
        x = 560;
    }
    fill(255, 255, 255);
    rect(x, y, 40, 60); //ship

    fill(c1);
    circle(100, 80, 70);
    fill(c2);
    circle(180, 80, 70);
    fill(c3);
    circle(260, 80, 70);
    fill(c4);
    circle(340, 80, 70);
    fill(c5);
    circle(420, 80, 70);
    fill(c6);
    circle(500, 80, 70);

    // if (dist(bullet.x, bullet.y, 80, 80) < 40){c1 = "black"}
    // circleRemoval(c1);
    // circleRemoval(c2);
    // circleRemoval(c3);
    // circleRemoval(c4);
    // circleRemoval(c5);
    // circleRemoval(c6);
    if (dist(bullet.x, bullet.y, 80, 80) < 40){c1 = "black"}
    if (dist(bullet.x, bullet.y, 160, 80) < 40){c2 = "black"}
    if (dist(bullet.x, bullet.y, 240, 80) < 40){c3 = "black"}
    if (dist(bullet.x, bullet.y, 320, 80) < 40){c4 = "black"}
    if (dist(bullet.x, bullet.y, 400, 80) < 40){c5 = "black"}
    if (dist(bullet.x, bullet.y, 480, 80) < 40){c6 = "black"}
// function circleRemoval(cN) { 
//     let cN = cN
//     for (let i = 0; i < 13; i++) {
//         if (dist(bullet.x, bullet.y, 80*(i+ 1), 80) < 40){cN = "black"}
//     }
// }

    if (c1 == "black" && c2 == "black" && c3 == "black" && c4 == "black" && c5 == "black" && c6 == "black" ) {
        fill(255, 255, 255);
        rect(0, 0, 600, 600);
        fill('black')
        textSize(60)
        text('You Win!', 175, 300)
    }
}


