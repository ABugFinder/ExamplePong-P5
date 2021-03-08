let bg;
let ball;
let players = [];
let space = 15;
let musicloop;
let sasageo;
let blackClover;
//let kick;
let pts;
let gameFont;

function setup() {
  // put setup code here
  bg = loadImage("/src/assets/images/board.png");
  
  // Música de fondo 
  //musicloop.loop(); musicloop.setVolume(0.5);
  sasageo.loop(); sasageo.setVolume(0.05);
  //blackClover.loop(); blackClover.setVolume(0.30);

  players.push(
    new Paddle(
        PaddleFactory.coords(0, board.height/2 - paddle.height / 2),
        PaddleFactory.controllSettings(87, 83),
        playersId.player1,
    ),
    new Paddle(
        PaddleFactory.coords(
            board.width - paddle.width, 
            board.height/2 - paddle.height / 2
        ),
        PaddleFactory.controllSettings(38, 40),
        playersId.player2,
    )
  );
  

  pts = new Points(PointsFactory.coords(board.width/2, 50), gameFont);

  ball = new Ball(
      BallFactory.coords(ballIni.xIni, ballIni.yIni), 
      players,
      pts,
  );

  ball.players = players;
  createCanvas(board.width, board.height);
}

function draw() {
  // put drawing code here
  background(bg);
  ball.draw();
  players.forEach(player => player.draw());
  pts.draw();
}

function preload(){
  gameFont = loadFont("/src/assets/fonts/kenvector_future_thin2.ttf");
  soundFormats('mp3', 'wav');
  musicloop = loadSound('/src/assets/sounds/musicloop.wav');
  sasageo = loadSound('/src/assets/sounds/Chachageo.mp3');
  blackClover = loadSound('/src/assets/sounds/BlackClover.mp3');
  //kick = loadSound('/src/assets/sounds/kick.wav');
}

function speedAugment(actualSpeed) {
  if(Math.sign(actualSpeed) == 1){
      return actualSpeed += ballConsts.speedAugmentx;
  }else{
      return actualSpeed -= ballConsts.speedAugmentx;
  }
}

function randomBallSpeed(){
  
  const direcciones = [1,-1];
  //Math.floor(Math.random()* (+12 - +7) + +7);
  let direccion = direcciones[Math.floor((Math.random() * 2))];
  return direccion;
}