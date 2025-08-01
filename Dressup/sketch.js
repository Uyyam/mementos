let canvas;

let model;
let hat1;
let hat2;

let clothes = [];

let bg;

// Load the image.
function preload() {
  model = loadImage('images/me.png');
  bg = loadImage('images/laceBG.png', windowWidth * 0.60, 700);

}

function setup() {
  canvas=createCanvas(windowWidth* 0.60, 700);
  canvas.parent('game-container');
  imageMode(CENTER);

  hat1 = new Clothes(loadImage('images/hat.png'), 100, 100);
  hat2 = new Clothes(loadImage('images/hat.png'), 500, 500);
  clothes=[hat1, hat2];

  button = createButton('Save Outfit');
  button.position(width+250, height + 450);
  button.mousePressed(() => {
    saveDrawing();
  });
  noFill();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  background(0);
  image(bg, width/2, height/2, bg.width * 0.6, bg.height * 0.65);
  image(model, width / 2, height / 2.12, model.width * 0.14, model.height * 0.14);
  // Display the clothes
  for (let i = 0; i < clothes.length; i++) {
    clothes[i].display();
  }
  for (let i = 0; i < clothes.length; i++) {
      if (mouseIsPressed) {
          if (!clothes[i].isDragging && mouseX > clothes[i].x - (clothes[i].imgwidth * 0.25) && mouseX < clothes[i].x + clothes[i].imgwidth * 0.25 && mouseY > clothes[i].y - (clothes[i].imgheight * 0.25) && mouseY < clothes[i].y + clothes[i].imgheight * 0.25) {
              clothes[i].isDragging = true;
              clothes[i].offsetX = mouseX - clothes[i].x;
              clothes[i].offsetY = mouseY - clothes[i].y;
          }
          if (clothes[i].isDragging) {
              clothes[i].drag(mouseX - clothes[i].offsetX, mouseY - clothes[i].offsetY);
          }
      } else {
          clothes[i].isDragging = false;
      }
          //  clothes[i].drag(mouseX, mouseY);
  }

    }

  function saveDrawing() {
    let graphics = createGraphics(410, 600);
    // copy just a part of canvas, starting at (50, 50)
  // and with width and height 300,
  // from canvas on screen to an offscreen graphics
  // objects, then save the graphics.
    graphics.copy(canvas, 320, 50, 410, 600, 0, 0, 300, 300);
    graphics.save("images/Screenshots/Picture.png");
    console.log("Image saved!");
  }
 

class Clothes{
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.imgwidth = 100;
    this.imgheight = 100;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
  }

  display(){
    image(this.image, this.x, this.y, this.imgwidth, this.imgheight);
  }

  drag(mouseX, mouseY){
    this.x = mouseX;
    this.y = mouseY;
  }
}