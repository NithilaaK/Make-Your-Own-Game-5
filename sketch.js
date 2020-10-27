var gameState = 0; 
var pet, intro, petHappy, trampReset;
var trampGameState = 0;


function setup() {
  createCanvas(350, 500);

  pet = new Pet("images/petHappy.png");

  petSleep = loadImage("images/petSleep.png");
  
  intro = new Intro();

  features = new Features();

  kitchenBg = loadImage("images/kitchen.png");

  bed = loadImage("images/bed.png");

  sofa = loadImage("images/sofa.png");

  mobile = loadImage("images/giphy.gif");

  food = new Food();

  trampolineImg = loadImage("images/trampoline.png");

  trampoline = createSprite(180, 365, 280, 100);
  trampoline.addImage(trampolineImg);

  trampolineGround = createSprite(0, 530, 400, 200);
  trampolineGround.visible = false;

  petTrampoline = createSprite(180, 190, 100, 200);
  petTrampoline.visible = false;

  trampolineCollider = createSprite(190, 350, 276, 47);
  trampolineCollider.visible = false;

  petEat = createSprite(130, 275, 200, 200);
  petEat.visible = false;

  petsleep = createSprite(358, 358, 100, 100);
  petsleep.visible = false;
}

function draw() {
  if (gameState === 0) {
    background("#FFFDD0"); 

    food.hide();
  
    intro.display();

    features.hide();
  } else if (gameState === 1) {

    intro.hide();

    fill(0, 255, 255);
    rect(-5, -5, 400, 400);

    food.hide();

    fill("green");
    rect(0, 380, 400, 125);

    defaultText();

    pet.display();

    features.display(); 
  } else if (gameState === 2) {
    background("#90D8C9");

    trampReset = createButton("↺");
    trampReset.position(178, 130);

    fill("blue");
    rect(0, 380, 400, 125);

    drawSprites();

    food.hide();

    pet.display();

    trampolineGame(); 

    defaultText();
  } else if (gameState === 3) {
    background("#F65959");

    defaultText();

    image(kitchenBg, 0, 70, 350, 331);  

    pet.x = petEat.x;
    pet.y = petEat.y;

    food.display();

    fill("#DDF0EE");
    rect(0, 380, 400, 125);

    pet.display();

    pet.updateImage("images/petHappy.png");
  } else if (gameState === 4) {
    background("#DBC5F7");

    food.hide();

    fill("#D4EBF2");
    rect(0, 380, 400, 125);

    image(bed, 26, 275, 300, 150);

    image(mobile, 20, 0, 280, 245);

    pet.display();

    pet.updateImage("images/petHappy.png");

    pet.x = petsleep.x;
    pet.y = petsleep.y;

    petsleep.x -= 2;

    if (petsleep.x <= 320) {
      petsleep.x -= 2;
      petsleep.y -= 5;
    }

    if (petsleep.x <= 180) {
      petsleep.x = -100;
      petsleep.y = -200;
      image(petSleep, 189, 300, 280, 245);
    }

    defaultText();
  } else if (gameState === 5) {
    background("#FFFDD0");

    fill("#D4EBF2");
    rect(0, 380, 400, 125);

    image(sofa, 24, 236, 300, 175);

    pet.display();

    petSit = createSprite(150, 200, 200, 200);
    pet.x = petSit.x;
    pet.y = petSit.y;
    petSit.visible = false;

    food.hide();

    defaultText();

    fill("blue")
    textSize(20);
    text("Relax! Your pet needs rest!", 65, 64);
  }
}

function defaultText() {
  fill("blue")
  textSize(30);
  text("Take care of " + pet.petName + "!", 35, 36);
}

function trampolineGame(){
  if(trampGameState === 0) {
    trampReset.hide();
      
    pet.updateImage("images/petHappy.png");

    pet.x = petTrampoline.x;
    pet.y = petTrampoline.y;

    trampoline.x = World.mouseX;
    trampolineCollider.x = World.mouseX;
    
    if(petTrampoline.collide(trampolineGround)) {
      trampGameState = 1;
    }

    petTrampoline.bounceOff(trampolineCollider);

    petTrampoline.velocityY = petTrampoline.velocityY + 1; 

    if(pet.y > 306) {
      trampGameState = 1;
    }
  } else if (trampGameState === 1) {
    textSize(20); 
    text("Oh-no! Let's try again...", 78, 94);

    trampReset.show();

      trampReset.mousePressed(() => {
        trampGameState = 0;
        petTrampoline.x = 200;
        petTrampoline.y = 200;
      })

    pet.updateImage("images/sadPet.png");
  }
}