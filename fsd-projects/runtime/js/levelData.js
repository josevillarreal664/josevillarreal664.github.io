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
          { type: "obstical", x: 400, y: groundY -390, damage: 30},
          { type: "obstical", x: 600, y: groundY -450, damage: 30},
          { type: "obstical", x: 800, y: groundY -370, damage: 30},
          { type: "enemy", x: 400, y: groundY -50, damage: 10},
          { type: "enemy", x: 700, y: groundY -50, damage: 10},
          { type: "enemy", x: 1000, y: groundY -50, damage: 10},
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
