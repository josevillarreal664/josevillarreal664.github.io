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
          { type: "Obstacle", x: 1200, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike_2.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 1800, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 2400, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 3000, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike_2.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 3600, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 4200, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike_2.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 4800, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 6000, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "Obstacle", x: 6600, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 20, offsetY: 20, image: "img/spike.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 1000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 1500, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5,spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 2000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5,spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 2500, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 3000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 3500, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 4000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 4500, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 5000, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 5500, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 6200, y: groundY -50, hzS: 25, image: "img/bandit.png", offsetX: 60, offsetY: 40, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "reward", x: 2300, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 3300, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 4900, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 5400, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 6500, y: groundY -110, hzS: 25, image: "img/Hpotion.png", offsetX: 10, offsetY: 10, scaleX: 0.05, scaleY: 0.05, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "levelMarker", x: 7400, y: groundY -100, hzS: 30, image: "img/portal.png", offsetX: 90, offsetY: 70, scaleX: 0.5, scaleY: 0.8, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 100, score: 1000},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "Obstacle", x: 1200, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 70, offsetY: 90, image: "img/vine.png", scaleX: 0.1, scaleY: 0.1},
          { type: "Obstacle", x: 1800, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 2400, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 3000, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 70, offsetY: 90, image: "img/vine.png", scaleX: 0.1, scaleY: 0.1},
          { type: "Obstacle", x: 3600, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 4200, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 70, offsetY: 90, image: "img/vine.png", scaleX: 0.1, scaleY: 0.1},
          { type: "Obstacle", x: 4800, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 6000, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 6600, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "Obstacle", x: 7200, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 70, offsetY: 90, image: "img/vine.png", scaleX: 0.1, scaleY: 0.1},
          { type: "Obstacle", x: 7800, y: groundY -360, hZS: 15, damage: 30, rotation: 0, offsetX: 70, offsetY: 90, image: "img/vine.png", scaleX: 0.1, scaleY: 0.1},
          { type: "Obstacle", x: 8400, y: groundY -450, hZS: 15, damage: 30, rotation: 0, offsetX: 30, offsetY: 40, image: "img/vines-pink.png", scaleX: 0.3, scaleY: 0.3},
          { type: "enemy", x: 1000, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 1500, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2,spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 2000, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2,spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 2500, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 3000, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 3500, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 4000, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 4500, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 5000, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 5500, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 6200, y: groundY -50, hzS: 25, image: "img/boar.png", offsetX: 80, offsetY: 110, scaleX: 0.2, scaleY: 0.2, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -10, score: 100},
          { type: "enemy", x: 8900, y: groundY -50, hzS: 200, image: "img/game-over.png", offsetX: 140, offsetY: 200, scaleX: 0.5, scaleY: 0.5, spriteX: -25, spriteY: -25, velocityX: -2, integrity: -100, score: 9000},
          { type: "reward", x: 2300, y: groundY -110, hzS: 25, image: "img/shield.png", offsetX: 40, offsetY: 40, scaleX: 0.3, scaleY: 0.3, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 3300, y: groundY -110, hzS: 25, image: "img/shield.png", offsetX: 40, offsetY: 40, scaleX: 0.3, scaleY: 0.3, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 4900, y: groundY -110, hzS: 25, image: "img/shield.png", offsetX: 40, offsetY: 40, scaleX: 0.3, scaleY: 0.3, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 5400, y: groundY -110, hzS: 25, image: "img/shield.png", offsetX: 40, offsetY: 40, scaleX: 0.3, scaleY: 0.3, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},
          { type: "reward", x: 6500, y: groundY -110, hzS: 25, image: "img/shield.png", offsetX: 40, offsetY: 40, scaleX: 0.3, scaleY: 0.3, spriteX: -25, spriteY: -25, velocityX: 2, integrity: 10, score: 50},

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
