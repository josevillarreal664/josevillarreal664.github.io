var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        var tree;
        var buildings = [];

        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.bitmap("img/landscape.png");//draws rectangle and stores rectangle in background fill
            background.addChild(backgroundFill);// adds background fill to the background object
            
            // TODO 2: - Add a moon and starfield
            
            for(var i = 0; i < 150 ; i++){
                var circle = draw.circle(2, "white", "LightGray", 2);// create a circle with a specified radius, border color, fill color, alfa and stores it in the variable circle
                circle.x = canvasWidth * Math.random();//sets a random x position within canvas width
                circle.y = groundY * Math.random();//sets a random x position within canvas groundY
                //background.addChild(circle);//adds stars to the background
            }

            var moon = draw.bitmap("img/moon.png");//creates bitmap object using the moon image and stores it in our variable moon
            moon.x = canvas.width -350;//sets moons x position 
            moon.y = groundY -450;//sets moons y position 
            moon.scaleX = .75;// scales the moons width
            moon.scaleY = .75;// scales the moons height
            //background.addChild(moon);// adds the moon to the background container

            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for (var i = 0; i < 5; ++i) {//creates 5 buildings
                var buildingColors = ["green", "blue", "pink", "black"];
                var buildingHeight = 300 * Math.random();// stores the valuse which represents the height
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);//draws a rectangle as buildingheight, light gray, and black
                building.x = 200 * i;// draws a rectangle and stores it on the x axis
                building.y = groundY - buildingHeight;// // draws a rectangle and stores it on the y axis
                //background.addChild(building);// makes it visible in the background
                //buildings.push(building);// pushes it to the building array to be stored
            }
            
            // TODO 3: Part 1 - Add a tree
            
            tree = draw.bitmap("img/tree.png");//creates bitmap object using the tree image and stores it in our variable tree
            tree.x = 400;//sets moons x position 
            tree.y = 230;//sets moons y position 
            //background.addChild(tree);// adds tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            
            tree.x = tree.x - 3;// moves the tree left by subtracting from its current position

            if (tree.x < -200) {//checks if the tree has gone off the left and resets to the right
            tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i < buildings.length; i++) {//pulls a building from the buildings array and assigns it to the variable building
            var building = buildings[i];// assigns it to the variable building
            building.x -= .50;//takes x value of the building and goes to the left
            if (building.x < -200) {//checks if the building has gone off the left and resets to the right
                building.x = canvasWidth;
            }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
