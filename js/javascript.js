$(document).ready(function() {
    var Battlefield_class = function() {
       this._canvas = $("#battlefield");
       this.canvasWidth = this._canvas.width();
       this.canvasHeight = this._canvas.height();
       this.context = this._canvas.get(0).getContext("2d");//public
       //clean
       this.clean = function(){
           this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
       }
       //print
       this.print_balls=function(x,y,radi,color){
			  this.context.fillStyle = color;
			  this.context.beginPath();
			  this.context.arc(x, y, radi, 0, Math.PI*2);
			  this.context.closePath();
			  this.context.fill();
      }
    }

    var myCanvas = new Battlefield_class("mycanvas"); //create canvas
    myCanvas.print_balls(10, 10, 5, "red");
})