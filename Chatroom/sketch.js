let chatBox;
let avatar;
let imgx;
let imgy;
let message = '';
let lastMessage = '';
let delay = false;
let dialogueDelay = false; // Flag to handle delay

let npc1box =[300, 500, 200, 100];
let npc2box = [1000, 50, 200, 100];
let npc3box = [1500, 600, 200, 100];

let npc1text = ["Hello, I am NPC 1!", "wan 2 be my bf?", "lets go on a date"];
let npc2text = ["Hello, I am NPC 2!", "party @ my house", "fashion show @ my house"];
let npc3text = ["Hello, I am NPC 3!", "I like to play games", "lets play together!"];

let npcDialogueIndex = 0; // Global variable to track dialogue index

function preload(){
  avatar = loadImage("images/me.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  chatBox = createInput();
  chatBox.position(windowWidth/2, windowHeight*0.95);
  chatBox.size(windowWidth/3);
  chatBox.center('horizontal');
  chatBox.input(draw);


  imageMode(CENTER);

  imgx = 100;
  imgy = 100;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  rect(npc1box[0], npc1box[1], npc1box[2], npc1box[3]);
  rect(npc2box[0], npc2box[1], npc2box[2], npc2box[3]);
  rect(npc3box[0], npc3box[1], npc3box[2], npc3box[3]);

  image(avatar,imgx,imgy,  100, 100);

  text(message,imgx-50,imgy-50);
  if(!delay && message !== '') {
    delay = true;
  setTimeout(() => {
    message = '';
    delay = false
  }, 5000); // Delay to allow for chat box input
}
  
  console.log(imgx, imgy);

  
  talkToNPC();
  
}

function keyPressed() {
  if (keyCode === ENTER) {
    message = chatBox.value();
    chatBox.value('');
    delay = false;
  }
}

function mousePressed(){
  if(mouseY < windowHeight * 0.9){
  imgx= mouseX;
  imgy = mouseY;
  }
  console.log(imgx>npc1box[0]&& imgx< (npc1box[0] + npc1box[2]));
  console.log(imgy>npc1box[1] && imgy< npc1box[1] + npc1box[3]);
 
}

function talkToNPC() {
  if (imgx > npc1box[0] && imgx < (npc1box[0] + npc1box[2]) &&
      imgy > npc1box[1] && imgy < npc1box[1] + npc1box[3]) {
    // Display the current dialogue
    let dialogue = npc1text[npcDialogueIndex];
    text(dialogue, npc1box[0] + 200, npc1box[1]);

    // Check if a new message is typed and delay is not active
    if (message !== lastMessage && !dialogueDelay && message !== '') {
      dialogueDelay = true; // Activate delay
      setTimeout(() => {
        npcDialogueIndex++; // Increment dialogue index
        npcDialogueIndex %= npc1text.length; // Loop back to the start if at the end
        lastMessage = message; // Update lastMessage to the current message
        dialogueDelay = false; // Deactivate delay
      }, 500); // Delay of 500ms
    }
  }
  else if (imgx > npc2box[0] && imgx < (npc2box[0] + npc2box[2]) &&
  imgy > npc2box[1] && imgy < npc2box[1] + npc2box[3]) {
// Display the current dialogue
let dialogue = npc2text[npcDialogueIndex];
text(dialogue, npc2box[0] + 200, npc2box[1]);

// Check if a new message is typed and delay is not active
if (message !== lastMessage && !dialogueDelay && message !== '') {
  dialogueDelay = true; // Activate delay
  setTimeout(() => {
    npcDialogueIndex++; // Increment dialogue index
    npcDialogueIndex %= npc2text.length; // Loop back to the start if at the end
    lastMessage = message; // Update lastMessage to the current message
    dialogueDelay = false; // Deactivate delay
  }, 500); // Delay of 500ms
}
}
else if (imgx > npc3box[0] && imgx < (npc3box[0] + npc3box[2]) &&
imgy > npc3box[1] && imgy < npc3box[1] + npc3box[3]) {
// Display the current dialogue
let dialogue = npc3text[npcDialogueIndex];
text(dialogue, npc3box[0] + 200, npc3box[1]);

// Check if a new message is typed and delay is not active
if (message !== lastMessage && !dialogueDelay && message !== '') {
dialogueDelay = true; // Activate delay
setTimeout(() => {
  npcDialogueIndex++; // Increment dialogue index
  npcDialogueIndex %= npc3text.length; // Loop back to the start if at the end
  lastMessage = message; // Update lastMessage to the current message
  dialogueDelay = false; // Deactivate delay
}, 500); // Delay of 500ms
}
}
  else{
    npcDialogueIndex = 0;
    lastMessage = '';
    dialogueDelay = false;
  }
}