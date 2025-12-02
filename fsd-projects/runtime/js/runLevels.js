var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObsticle(x, y, damage){
      var hitZoneSize = 25;// sets the size of the obsicles collisoin area
      var damageFromObstacle = 10;//ammount of damage taken
      var obsticleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates obsicle hit zone attaches hitzone size and stores it to sawblade hitzone
      obsticleHitZone.x = x;// sets the obsticals x position
      obsticleHitZone.y = groundY - y;// sets the obsticals y position
      game.addGameItem(obsticleHitZone);// adds obsicle hitzone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png");//draws image as bitmap and stores it as an obsicle image
      obsticleHitZone.addChild(obstacleImage);// adds image to the hitzone
      obstacleImage.x = -25;//offsets the image horizontally relative to the hitzone
      obstacleImage.y = -25//offsets the image vertically relative to the hitzone

      obsticleHitZone.rotationalVelocity = 50;

    }

    createObsticle(400, groundY -390, 30);
    createObsticle(600, groundY -450, 70);
    createObsticle(800, groundY -370, 10);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 2;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
      enemy.shrink();
      enemy.flyOff();
    };

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
