var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstical", x: 1200, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 1800, y: groundY -450, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 2400, y: groundY -450, hZS: 20, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 3000, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 3600, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 4200, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 4800, y: groundY -450, hZS: 20, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 5400, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 6000, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 6600, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 7200, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 7800, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstical", x: 8400, y: groundY -360, hZS: 25, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 400, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -4, integrity: -10, score: 100},
          { type: "enemy", x: 700, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5,spriteX: -25, spriteY: -25, velocityX: -4, integrity: -10, score: 100},
          { type: "enemy", x: 1000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5,spriteX: -25, spriteY: -25, velocityX: -4, integrity: -10, score: 100},
          { type: "reward", x: 550, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 4, integrity: 10, score: 50},
          { type: "reward", x: 800, y: groundY -50, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 4, integrity: 10, score: 50},
          { type: "reward", x: 1100, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 4, integrity: 10, score: 50},
          { type: "levelMarker", x: 10000, y: groundY -100, hzS: 30, image: "img/portal.png", offsetX: 90, offsetY: 70, scaleX: 0.5, scaleY: 0.8, spriteX: -25, spriteY: -25, velocityX: -2, integrity: 100, score: 1000},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstical", x: 400, y: groundY },
          { type: "obstical", x: 600, y: groundY },
          { type: "obstical", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
