class Points{
    constructor (coords, font){
        //Coordenadas
        this.x = coords.x;
        this.y = coords.y;
        
        //Fonts
        this.font = font;

        //Puntajes
        this.p1 = 0;
        this.p2 = 0;
    }

    draw(){
        fill(255,255,255);
        textSize(64);
        textAlign(CENTER);
        textFont(this.font);
        //text("0 -- 0", 10, 100);
        text(`${this.p1} - ${this.p2}`, this.x, this.y);
    }

    playerPointPlusPlus(playerId){
        this[playerId]++;
    }
}

const PointsFactory = {
    coords: (x, y) => ({
        x,
        y,
    }),
    
};