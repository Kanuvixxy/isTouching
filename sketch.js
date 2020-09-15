var fixedRect, movingRect, gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";

  gameObj1 = createSprite(100, 100, 40, 40);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(200, 100, 40, 40);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(300, 100, 40, 40);
  gameObj3.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = 5;
}

function draw() {
  background(0);

    movingRect.x = mouseX;
    movingRect.y = mouseY;

    if(isTouching(movingRect, gameObj2)){
      gameObj2.shapeColor = "pink";
      movingRect.shapeColor = "pink";
    }

    else{
      gameObj2.shapeColor = "green";
      movingRect.shapeColor = "green";
    }

  drawSprites();
}

function isTouching(object1, object2){
  if (
    object1.y - object2.y < object1.height / 2 + object2.height / 2 &&
    object2.y - object1.y < object1.height / 2 + object2.height / 2 &&
    object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
    object2.x - object1.x < object1.width / 2 + object2.width / 2
  ) {
    return true;
  }

  else{
    return false;
  }
}
