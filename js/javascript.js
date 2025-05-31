$(document).ready(function() { //when ready
    class BattlefieldClass {
        constructor(id) {
            this.canvas = $("#"+id); //get canvas attributes
            this.canvasWidth = this.canvas.width();
            this.canvasHeight = this.canvas.height();
            this.context = this.canvas.get(0).getContext("2d");
        }

        clean() { //clean screen
            this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
        }

        print_balls = function(x,y,radius,color) {
            this.context.fillStyle = color;
            this.context.beginPath();
            this.context.arc(x, y, radius, 0, Math.PI*2);
            this.context.closePath();
            this.context.fill();
        }
    }
    
    var Battlefield = new BattlefieldClass("battlefield"); //create canvas
    
    Battlefield.print_balls(250, 200, 15, "red");
    Battlefield.print_balls(100, 105, 10, "green");
})