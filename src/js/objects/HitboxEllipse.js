class HitboxEllipse {
    constructor(coords, dims) {
        this.x = coords.x;
        this.y = coords.y;
        this.width = dims.width;
        this.height = dims.height;
    }
    // hbe = hitboxellipse
    wasHitEllipse(hbe) {
      return (
        hbe.x < this.x + this.width &&
        hbe.x + hbe.width > this.x &&
        hbe.y < this.y + this.height &&
        hbe.y + hbe.height > this.y
      );
    }
  
    draw() {
      fill(255, 255, 255, 120);
      ellipse(this.x, this.y, this.width, this.height);
    }
}
  
const EllipseHitBoxFactory = {
    coords: (x, y) => {
        return { x, y };
    },
    ellipseDims: (width, height) => {
        return { width, height };
    },
};