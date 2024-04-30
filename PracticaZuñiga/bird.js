class Bird{
    constructor(img,heigh){
        this.img = img;
        this.x = 64;
        this.y = heigh/3;
        this.w = 51;
        this.h = 36;
        this.speed = 5;
        this.gravity = 0.3;
        this.jump = -8;
        this.dead = false; 
    }

    draw(){
        if (!this.dead) {
            image(this.img, this.x, this.y, this.w, this.h);
        }    
    }

    update(){
        if (!this.dead) {
            this.speed += this.gravity;
            this.y += this.speed;
            if (this.y > height) {
                this.dead = true;
            }
            if(this.y < 0){
                this.speed = 0;
                this.y = 0;
            }
            if(this.y > height - this.h){
                this.speed = 0;
                this.y = height - this.h;
    
            }
        }
    }

    up(){
        if (!this.dead) {
            this.speed += this.jump;
        }
    }

    colision(tubería) {
        if (!this.dead) {
            if (
                this.x + this.w >= tubería.x &&
                this.x <= tubería.x + tubería.w &&
                (this.y <= tubería.top || this.y + this.h >= tubería.top + tubería.espacio)
            ) {
                this.dead = true; 
                return true; 
            }
        }
        return false; 
    }
}
