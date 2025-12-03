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

    

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25);
      var enemySprite = draw.rect(50, 50, "red");//creates image of an enemy and stores it in enemySprite
      enemySprite.x = -25;//x axis offset for image hitZone
      enemySprite.y = -25; //y axis offset for image hitZone
      enemy.addChild(enemySprite);//attaches sprite to enemy object
      enemy.x = x;// setting the enemyX position
      enemy.y = y;// setting the enemyX position
      game.addGameItem(enemy);//adds enemy to the game

      enemy.velocityX -= 2;// animating the enemy accross the screen

      //handles when halle collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10)//reduces health
      };

      //handles when halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);//increases the players score
        //on projectile collision fadeOut/shrink/flyoff the enemy
        enemy.fadeOut();
        //enemy.shrink();
        //enemy.flyOff();
      };
    }

    

    function createReward(x, y){
      var reward = game.createGameItem("reward", 25);
      var rewardSprite = draw.rect(50, 50, "blue");//creates image of an reward and stores it in rewardSprite
      rewardSprite.x = -25;//x axis offset for image hitZone
      rewardSprite.y = -25; //y axis offset for image hitZone
      reward.addChild(rewardSprite);//attaches sprite to reward object
      reward.x = x;// setting the rewardX position
      reward.y = y;// setting the rewardX position
      game.addGameItem(reward);//adds reward to the game

      reward.velocityX -= 2;// animating the reward accross the screen

      //handles when halle collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10)//increases health
        game.increaseScore(50)//increases the players score
        reward.fadeOut();//on projectile collision fadeOut the enemy
      };
    }

    createReward(550, groundY -50);
    createReward(850, groundY -50);
    createReward(1100, groundY -50);

    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25);
      var levelSprite = draw.rect(50, 50, "yellow");//creates image of an level and stores it in levelSprite
      levelSprite.x = -25;//x axis offset for image hitZone
      levelSprite.y = -25; //y axis offset for image hitZone
      levelMarker.addChild(levelSprite);//attaches sprite to level object
      levelMarker.x = x;// setting the levelX position
      levelMarker.y = y;// setting the levelX position
      game.addGameItem(levelMarker);//adds level to the game

      levelMarker.velocityX -= 2;// animating the level accross the screen

      //handles when halle collides with level
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(100)//increases health
        game.increaseScore(1000)//increases the players score
        levelMarker.fadeOut();//on projectile collision fadeOut the enemy
        startLevel();
      };
    }

    createLevelMarker(1200, groundY -50);
    
    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel];//fetches the current level from the levelData arrya and stores it in the currentLevel
      var levelObjects = level.gameItems;//retreves the array of game items and stores it in the levelObjects variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstical"){
          createObsticle(element.x, element.y, element.damage);
        }

        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.damage);
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
