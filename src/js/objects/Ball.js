class Ball {
    
    constructor(coords, sonido, players = []) {
        // Coordenadas
        this.x = coords.x;
        this.y = coords.y;

        // Anchura y altura
        this.width = 50;
        this.height = 50;

        // Imagen
        this.img = loadImage("src/assets/images/ball.png");

        // Sonido
        this.sonido = sonido;
        this.sonido = loadSound('/src/assets/sounds/kick.wav');
        this.sonido.setVolume(0.05);

        // Velocidad
        // this.speedX = 8;
        // this.speedY = 8;

        this.speedX = Math.floor(Math.random()* (+12 - +7) + +7);
        this.speedY = Math.floor(Math.random()* (+12 - +7) + +7);

        this.players = players;

        // Hitbox
        /*
        this.hb = new HitboxSquare(
            HitBoxFactory.coords(this.x + 9, this.y + 9),
            HitBoxFactory.squareDims(29, 29)
        );
        */
        this.hb = new HitboxEllipse(
            EllipseHitBoxFactory.coords(this.x + 25, this.y + 25),
            EllipseHitBoxFactory.ellipseDims(25, 25)
        );
    }

    move() {
        if ( this.x < 0 ||  this.x >= board.width - this.width ||
            this.players.some( (player) => player.hb.wasHitSquare(this.hb)) ) 
        {
            this.speedX *= -1;
            //kick.play();// kick.setVolume(0.15);
        }
        if (this.y < 0 || this.y >= board.height - this.height) {
            this.speedY *= -1;
            //kick.play();// kick.setVolume(0.15);
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.hb.x += this.speedX;
        this.hb.y += this.speedY;
    }
/*
    collision() {
        // Player collision
        this.players.forEach((player) => {
            if (
                this.x < player.x + player.width &&
                this.x + this.width > player.x &&
                this.y < player.y + player.height &&
                this.height + this.y > player.y
            ) {
                this.speedX *= -1;
                this.sonido.play();
            }
        });
    }
*/
    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.hb.draw();
        this.move();
        //this.collision();
    }

}

const BallFactory = {
    // JSON
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
};
