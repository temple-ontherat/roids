class Guys {
    constructor() {
    }
    show(x,y) {
        this.x=x;
        this.y=y;
        push();
      fill(255,0,255);
      triangle(this.x, this.y-25,
         this.x+20, this.y+25, this.x-20, this.y+25);
         pop();
    }
  }