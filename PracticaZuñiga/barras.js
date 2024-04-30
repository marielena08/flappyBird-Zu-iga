class Barras{
    constructor(img) {
        this.espacio = 175; 
        this.top = random(height / 6, 3 / 4 * height); 
        this.bottom = height - (this.top + this.espacio); 
        this.x = width; 
        this.w = 78; 
        this.speed = 2; 
        this.img = img; 
        this.maxTuboHeight = 481; // Altura máxima de la sección de la imagen de la tubería
      }
      
      update() {
        this.x -= this.speed; 
      }
      
      draw() {
        // TUBERIA SUPERIOR
        let topTuboHeight = min(this.top, this.maxTuboHeight); // TUBERIA SUPERIOR NO PASE ALTURA DE LA SECION DEL SPRITE 
        let topTuboSourceY = 107 + (this.maxTuboHeight - topTuboHeight); 
        image(this.img, this.x, 0, this.w, topTuboHeight, 432, topTuboSourceY, this.w, topTuboHeight);
        
        // TUBERIA SUPERIOR
        image(this.img, this.x, this.top + this.espacio, this.w, this.bottom, 510, 107, this.w, this.bottom);
      }
      
      offscreen() {
        return (this.x < -this.w); 
      }
}