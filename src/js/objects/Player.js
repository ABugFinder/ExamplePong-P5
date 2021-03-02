class Player {
    
    constructor(coords, controllSettings) {
        // Coordenadas
        this.x = coords.x;
        this.y = coords.y;

        // Anchura y altura
        this.width = player.width;
        this.height = player.height;

        // Imagen
        this.img = loadImage("src/assets/images/paddle.png");

        // Velocidad
        this.speed = 8;

        // Controles
        this.controllSettings = controllSettings;

        // Hitbox
        this.hb = new HitboxSquare(
            HitBoxFactory.coords(this.x + 9, this.y + 9),
            HitBoxFactory.squareDims(this.width-18, this.height-18),
        );
    }

    moveUp() {
 /*       if(this.y > 15) {
            this.y -= this.speed;
        }
 */       
        if (this.hb.y >= 0) {
            this.y -= this.speed;
            this.hb.y -= this.speed;
        }
    }

    moveDown() {
/*        if(this.y < board.height - player.height - 15) {
            this.y += this.speed;
        }
*/
        if (this.hb.y < board.height - this.hb.height) {
            this.y += this.speed;
            this.hb.y += this.speed;
          }
    }

    move() {
        this.controllSettings.forEach(controll => {
            // Buscando las funciones que se encuentre dentro del arreglo
            if(keyIsDown(controll.key)) {
                this[controll.name]();
            }
        });
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.hb.draw();
        this.move();
    }

}

const PlayerFactory = {
    // JSON
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
    controllSettings: (moveUpKey, moveDownKey) => {
        return [
            {
                name: "moveUp",
                key: moveUpKey
            },
            {
                name: "moveDown",
                key: moveDownKey,
            },
        ];
    },
};