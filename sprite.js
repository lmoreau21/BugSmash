
class Sprite {
  constructor(animation, y, speed, isRight, death) {
    this.y = y;
    this.animation = animation;
    this.w = 50;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.isRight = isRight ;
    this.death = death;
    this.killBug = false;
    this.trans = 255;
    this.start = true;

    if(this.isRight){
      this.x = -this.w;
    }else if (!this.isRight){
      this.x = -width-this.w;
      console.log(this.x+" "+width);
    }
  }

  show() {
    if(!this.isRight){
      scale(-1, 1);
    }else if(this.isRight){
      scale(1,1)
    }
    if(!this.killBug && !gameOver){
      let index = floor(this.index) % this.len;
      tint(255, 255);
      this.animation[index].resize(50,50);
      image(this.animation[index], this.x, this.y);
      
    }else if(this.killBug){
      if(this.trans >= 0){
        this.trans--;
      }
      tint(255, this.trans);
      this.death[0].resize(50,50);
      this.death[1].resize(50,50);
      image(this.death[0], this.x, this.y);
      image(this.death[1],this.x,this.y);
    }
  }

  walk() {
    if(!this.isRight){
      scale(-1, 1);
    }else if(this.isRight){
      scale(1,1)
    }
    if(!this.killBug && !gameOver){
      this.index += this.speed;
      this.x += this.speed * 5;
      if (this.x > width && this.isRight) {
        this.x = -this.w;
      }else if(this.x > this.w && !this.isRight){
        this.x = -width-this.w;
      }
    }
  }

  deathCheck(){
    if(!gameOver&&((mouseX > this.x && mouseX < this.x+this.w)||(mouseX < abs(this.x) && mouseX > abs(this.x)-this.w)) && (mouseY > this.y && mouseY < this.y+50) && !this.killBug){
      this.killBug = true;
      score++;
      console.log(this.x+" "+width);
    }
  }

  
}