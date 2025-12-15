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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacle(x, y, hZS, damage, rotation, offsetX, offsetY, image, scaleX, scaleY){
      var hitZoneSize = hZS;// sets the size of the obsicles collisoin area
      var damageFromObstacle = damage;//ammount of damage taken
      var obsticleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates obsicle hit zone attaches hitzone size and stores it to sawblade hitzone
      obsticleHitZone.x = x;// sets the Obstacles x position
      obsticleHitZone.y = groundY - y;// sets the Obstacles y position
      game.addGameItem(obsticleHitZone);// adds obsicle hitzone to the game
      var obstacleImage = draw.bitmap(image);//draws image as bitmap and stores it as an obsicle image
      obsticleHitZone.addChild(obstacleImage);// adds image to the hitzone
      obstacleImage.x = -offsetX;//offsets the image horizontally relative to the hitzone
      obstacleImage.y = -offsetY//offsets the image vertically relative to the hitzone
      obstacleImage.scaleX = scaleX;//deals with how big the image appears on the screen on the x axis
      obstacleImage.scaleY = scaleY;//deals with how big the image appears on the screen on the y axis

      obsticleHitZone.rotationalVelocity = rotation;// deals with the rotational speed of the obstical

    }

    

    function createEnemy(x, y, hzS, image, offsetX, offsetY, scaleX, scaleY, spriteX, spriteY, velocityX, integrity, score){
      var enemy = game.createGameItem("enemy", hzS);
      var enemySprite = draw.bitmap(image);//creates image of an enemy and stores it in enemySprite
      enemySprite.x = spriteX;//x axis offset for image hitZone
      enemySprite.y = spriteY; //y axis offset for image hitZone
      enemy.addChild(enemySprite);//attaches sprite to enemy object
      enemy.x = x;// setting the enemyX position
      enemy.y = y;// setting the enemyX position
      game.addGameItem(enemy);//adds enemy to the game
      enemySprite.x = -offsetX;//offsets the image horizontally relative to the hitzone
      enemySprite.y = -offsetY//offsets the image vertically relative to the hitzone
      enemySprite.scaleX = scaleX;//deals with how big the image appears on the screen on the x axis
      enemySprite.scaleY = scaleY;//deals with how big the image appears on the screen on the y axis

      enemy.velocityX = velocityX;// animating the enemy accross the screen

      //handles when halle collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(integrity)//reduces health
      };

      //handles when halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(score);//increases the players score
        //on projectile collision fadeOut/shrink/flyoff the enemy
        enemy.fadeOut();//on projectile collision fadeOut the enemy
        //enemy.shrink();
        //enemy.flyOff();
      };
    }

    

    function createReward(x, y, hzS, image, offsetX, offsetY, scaleX, scaleY, spriteX, spriteY,  velocityX, integrity, score){
      var reward = game.createGameItem("reward", hzS);
      var rewardSprite = draw.bitmap(image);//creates image of an reward and stores it in rewardSprite
      rewardSprite.x = spriteX;//x axis offset for image hitZone
      rewardSprite.y = spriteY; //y axis offset for image hitZone
      reward.addChild(rewardSprite);//attaches sprite to reward object
      reward.x = x;// setting the rewardX position
      reward.y = y;// setting the rewardX position
      game.addGameItem(reward);//adds reward to the game
      rewardSprite.x = -offsetX;//offsets the image horizontally relative to the hitzone
      rewardSprite.y = -offsetY//offsets the image vertically relative to the hitzone
      rewardSprite.scaleX = scaleX;//deals with how big the image appears on the screen on the x axis
      rewardSprite.scaleY = scaleY;//deals with how big the image appears on the screen on the y axis

      reward.velocityX -=  velocityX;// animating the reward accross the screen

      //handles when halle collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(integrity)//increases health
        game.increaseScore(score)//increases the players score
        reward.fadeOut();//on projectile collision fadeOut the reward
      };
    }

    function createLevelMarker(x, y, hzS, image, offsetX, offsetY, scaleX, scaleY, spriteX, spriteY,  velocityX, integrity, score){
      var levelMarker = game.createGameItem("level", hzS);
      var levelSprite = draw.bitmap(image);//creates image of an level and stores it in levelSprite
      levelSprite.x = spriteX;//x axis offset for image hitZone
      levelSprite.y = spriteY; //y axis offset for image hitZone
      levelMarker.addChild(levelSprite);//attaches sprite to level object
      levelMarker.x = x;// setting the levelX position
      levelMarker.y = y;// setting the levelX position
      game.addGameItem(levelMarker);//adds level to the game
      levelSprite.x = -offsetX;//offsets the image horizontally relative to the hitzone
      levelSprite.y = -offsetY//offsets the image vertically relative to the hitzone
      levelSprite.scaleX = scaleX;//deals with how big the image appears on the screen on the x axis
      levelSprite.scaleY = scaleY;//deals with how big the image appears on the screen on the y axis

      levelMarker.velocityX -=  velocityX;// animating the level accross the screen

      //handles when halle collides with level
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(integrity)//increases health
        game.increaseScore(score)//increases the players score
        levelMarker.fadeOut();//on projectile collision fadeOut the portal
        startLevel();
      };
    }
    
    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel];//fetches the current level from the levelData arrya and stores it in the currentLevel
      var levelObjects = level.gameItems;//retreves the array of game items and stores it in the levelObjects variable

      for(var i = 0; i < levelObjects.length; i++){//calls all of the types and places them on the map every time they are called in the leveldata object
        var element = levelObjects[i];

        if(element.type === "Obstacle"){
          createObstacle(element.x, element.y, element.hZS, element.damage, element.rotation, element.offsetX, element.offsetX, element.image, element.scaleX, element.scaleY);
        }

        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.hzS, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.spriteX, element.spriteY, element.velocityX, element.integrity, element.score);
        }   

        if(element.type === "reward"){
          createReward(element.x, element.y, element.hzS,  element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.spriteX, element.spriteY, element.velocityX, element.integrity, element.score);
        }

        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y, element.hzS,  element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.spriteX, element.spriteY, element.velocityX, element.integrity, element.score);
        }
      }

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
