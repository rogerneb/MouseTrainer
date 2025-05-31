$(document).ready(function() { //when ready
    //CLASS Battlefield
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

        print_ball(ball) {
            console.log(ball);
            this.context.fillStyle = ball.color;
            this.context.beginPath();
            this.context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
            this.context.closePath();
            this.context.fill();
        }
    }

    //CLASS Ball
    class BallClass {
        constructor (x, y, radius, color, vx, vy, ax, ay) {
            this.x = x; //posx
		    this.y = y; //posy
            this.radius = radius;	 //radi pilota
            this.color = color;
            this.vx = vx; //velocitat x
            this.vy = vy; //velocitat y
            this.ax = ax; //acceleració x
            this.ay = ay; //acceleració y
        }
    }
    

    //MAIN
    var Battlefield = new BattlefieldClass("battlefield"); //create canvas
    var TestBall = new BallClass(100, 100, 20, "red", 0, 0, 0, 0);
    Battlefield.print_ball(TestBall);
})