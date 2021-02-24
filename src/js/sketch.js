let bg;
let ball;
let players = [];
let space = 15;

function setup() {
  // put setup code here
  bg = loadImage("/src/assets/images/board.png");
  
  ball = new Ball(BallFactory.coords(board.width/2, board.height/2));

  players.push(
    new Player(
      PlayerFactory.coords(
        space, board.height/2 - player.height/2),
      PlayerFactory.controllSettings(87,83)
    ),
    new Player(
      PlayerFactory.coords(
        board.width - player.width-space,
        board.height/2 - player.height/2
      ),
      PlayerFactory.controllSettings(38,40),
    )
  );
  ball.players = players;
  createCanvas(board.width, board.height);
}

function draw() {
  // put drawing code here
  background(bg);
  ball.draw();
  players.forEach(player => player.draw());
}