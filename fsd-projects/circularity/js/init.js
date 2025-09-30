var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        
        var circle; //variable to hold one circle
        var circles = [];  //variable to store all circles in an array


        // TODO 2 : Create a function that draws a circle 
        
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, "#9b537fff", 2); // draws random circle within the specified canvas under specified conditions
            physikz.addRandomVelocity(circle, canvas, 5, 5); //changes the speed of the circle by a number amount
            view.addChild(circle); //im not really sure what this does
            circles.push(circle); //puts (circle) into the array by pushing it to the front
        }


        // TODO 3 : Call the drawCircle() function

        //drawCircle(); // calls the function drawCircle
        //drawCircle(); // calls the function drawCircle
        //drawCircle(); // calls the function drawCircle
        //drawCircle(); // calls the function drawCircle
        //drawCircle(); // calls the function drawCircle

        // TODO 7 : Use a loop to create multiple circles

        for (var i = 0; i < 100; i++) {
            drawCircle(); // calls the function drawCircle
        } //makes 100 circles appear by repeating the code for a specified amount


        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()

            //physikz.updatePosition(circles[0]); //updates position of the specified circle in the array
            //physikz.updatePosition(circles[1]); //updates position of the specified circle in the array
            //physikz.updatePosition(circles[2]); //updates position of the specified circle in the array
            //physikz.updatePosition(circles[3]); //updates position of the specified circle in the array
            //physikz.updatePosition(circles[4]); //updates position of the specified circle in the array

            for (var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i]); //updates position of the circle in the array for all circles
                game.checkCirclePosition(circles[i]); //updates position of the circle to the opposite side of the screen
            }
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            
            //game.checkCirclePosition(circles[0]); //updates position of the circle to the opposite side of the screen
            //game.checkCirclePosition(circles[1]); //updates position of the circle to the opposite side of the screen
            //game.checkCirclePosition(circles[2]); //updates position of the circle to the opposite side of the screen
            //game.checkCirclePosition(circles[3]); //updates position of the circle to the opposite side of the screen
            //game.checkCirclePosition(circles[4]); //updates position of the circle to the opposite side of the screen

            // TODO 8 / TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } //updates ball position past the right to appear from the left

            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(circle.x < 0){
                circle.x = canvas.width;
            } //updates ball position past the left to appear from the right

            if(circle.y > canvas.height){
                circle.y = 0;
            } //updates ball position past the bottom to appear from the top

            if(circle.y < 0){
                circle.y = canvas.height;
            } //updates ball position past the top to appear from the bottom


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
