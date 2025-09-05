$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,630,70,30,"rgba(207, 55, 253, 0.5)");//bottom
    createPlatform(1200,630,70,30,"rgba(207, 55, 253, 0.5)");//to the right
    createPlatform(350,400,70,30,"rgba(207, 55, 253, 0.5)");//lil up
    createPlatform(680,350,20,450,"rgba(207, 55, 253, 0.5)");//wall
    createPlatform(600,530,70,30,"rgba(207, 55, 253, 0.5)");//next to wall
    createPlatform(680,150,20,100,"rgba(207, 55, 253, 0.5)");//wall up
    createPlatform(100,150,600,20,"rgba(207, 55, 253, 0.5)");//up walkway
    createPlatform(780,440,70,30,"rgba(207, 55, 253, 0.5)");//lil up to the side
    createPlatform(910,200,20,450,"rgba(207, 55, 253, 0.5)");//wall 2
    createPlatform(1000,530,70,30,"rgba(207, 55, 253, 0.5)");//next to wall 2
    createPlatform(1160,510,300,20,"rgba(207, 55, 253, 0.5)");//lil up far right
    createPlatform(1190,420,20,90,"rgba(207, 55, 253, 0.5)");//wall 3
    createPlatform(1190,420,130,20,"rgba(207, 55, 253, 0.5)");//big up far right
    createPlatform(1000,340,70,30,"rgba(207, 55, 253, 0.5)");//next to wall
    createPlatform(910,200,130,20,"rgba(207, 55, 253, 0.5)");//platform on wall on right
    createPlatform(1200,250,70,30,"rgba(207, 55, 253, 0.5)");//next to platform on wall on right
    createPlatform(790,230,20,30,"rgba(207, 55, 253, 0.5)");//floating


    // TODO 3 - Create Collectables
    createCollectable("skull", 320, 590, 0.4, 0.9);
    createCollectable("potion", 370,360, 0.5, );
    createCollectable("link", 140,110);
    createCollectable("database", 1220,460);
    createCollectable("kennedi", 1230,210);


    
    // TODO 4 - Create Cannons
    createCannon("right",650,1200);
    createCannon("left",360,1700);
    createCannon("bottom",670,1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
