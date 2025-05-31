$(document).ready(function() {
    class BattlefieldClass {
        constructor(id){
            this.canvas = $("#"+id);
            this.canvasWidth = this.canvas.width();
            this.canvasHeight = this.canvas.height();
            this.context = this.canvas.get(0).getContext("2d");//public
        }

        clean(){
            this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
        }

        print_balls = function(x,y,radi,color){
            this.context.fillStyle = color;
            this.context.beginPath();
            this.context.arc(x, y, radi, 0, Math.PI*2);
            this.context.closePath();
            this.context.fill();
        }
    }
    
    var Battlefield = new BattlefieldClass("battlefield"); //create canvas
    Battlefield.print_balls(10, 10, 5, "red");
})