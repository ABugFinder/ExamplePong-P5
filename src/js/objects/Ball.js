class Ball {
    
    constructor(coords, sonido) {
        // Coordenadas
        this.x = coords.x;
        this.y = coords.y;

        // Anchura y altura
        this.width = 50;
        this.height = 50;

        // Imagen
        this.img = loadImage("src/assets/images/ball.png");

        // Sonido
        this.sonido = loadSound('/src/assets/sounds/kick.wav');
        this.sonido.setVolume(0.05);

        // Velocidad
        // this.speedX = 8;
        // this.speedY = 8;

        this.speedX = Math.floor(Math.random()*10 - 5);
        this.speedY = Math.floor(Math.random()*10 - 5);

        this.players = [];
    }

    move() {
        // Wall collision
        if((this.x < 0 || this.x >= board.width - this.width)) {
            this.speedX *= -1;
        }
        if(this.y < 0 || this.y >= board.height - this.height) {
            this.speedY *= -1;
            kick.play();// kick.setVolume(0.15);
        }

        
        //let d = dist(a1.x, a1.y, b2.x, b2.y);
        this.x += this.speedX;
        this.y += this.speedY;
    }

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

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        this.collision();
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