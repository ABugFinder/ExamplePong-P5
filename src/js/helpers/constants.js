const board = {
    width: 1920,
    height: 1080,
}

const paddle = {
    width: 35,
    height: 270,
}

const ballConsts = {
    width: 64,
    height: 64,
    speedAugmentx: 0.1,
    speedAugmenty: 0.1,
}

const ballIni = {
    xIni: board.width/2 - ballConsts.width/2,
    yIni: board.height/2 - ballConsts.height/2,
    speedX: 8,
    speedY: 8,
}

const ballHitBox = {
    plusX: 19,
    plusy: 19,
}

const paddleHitBox = {
    width: paddle.width,
    height: ((paddle.height)/3) - 5,
    contHitBoxs: 3,
}

const paddleHitBoxActions = {
    restartBall: "restartBall",
    sumSpeedUp: "sumSpeedUp",
    sumSpeedDown: "sumSpeedDown",
    normalBounce: "normalBounce",
}

const playersId = {
    player1: "p1",
    player2: "p2",
}

const boardHitBox = {
    plusLimit: 10,
}