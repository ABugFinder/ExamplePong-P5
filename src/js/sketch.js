let bg;
let ball;
let players = [];
let space = 15;
let musicloop;
let sasageo;
let blackClover;
let kick;

function setup() {
  // put setup code here
  bg = loadImage("/src/assets/images/board.png");
  
  //musicloop.loop(); musicloop.setVolume(0.5);
  //sasageo.loop(); sasageo.setVolume(0.15);
  //blackClover.loop(); blackClover.setVolume(0.30);
  
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

function preload(){
  soundFormats('mp3', 'wav');
  musicloop = loadSound('/src/assets/sounds/musicloop.wav');
  sasageo = loadSound('/src/assets/sounds/Chachageo.mp3');
  blackClover = loadSound('/src/assets/sounds/BlackClover.mp3');
  kick = loadSound('/src/assets/sounds/kick.wav');
}