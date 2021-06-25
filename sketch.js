//Assigning variables
var opencard, opencardImg;
var playButton, playButtonImg;
var doraRun, doraRunImg;
var arrow, arrowImg;
var nextLevel, nextLevelImg;

var jungle, jungleImg;
var monkey, monkeyImg;
var lion, lionImg;
var bear, bearImg;
var snake, snakeImg;

var l1, l1Img;
var l2, l2Img;
var l3, l3Img;

var fort, fortImg;
var thorn, thornImg;
var invisibleGround;

var doraWalk, doraWalkImg;
var restart, restartImg;
var sadDoraImg;

var hill, hillImg;
var dora, doraImg;
var swiper,swiperImg;
var swiper1,swiper1Img;
var swiper2,swiper2Img;
var swiper3,swiper3Img;

var final;
var paddle1, paddle2;
var gameOver, gameOverImg;
var obstaclesGroup;
var end, endImg;
var treasure, treasureImg;
var hand, handImg;
var paddle3, paddle4, paddle5

var bgMusic;

var score = 0;
var gameState  = "initialState";

var textTreasure = 0;

var dummy = 0;

//Loading images
function preload() {
    opencardImg   = loadImage("sprites/Openind Card.png");
    playButtonImg = loadImage("sprites/Play button.png");

    l1Img         = loadImage("sprites/L1.png");
    l2Img         = loadImage("sprites/L2.png");
    l3Img         = loadImage("sprites/L3.png");

    fortImg       = loadImage("sprites/Fort.png");
    doraRunImg    = loadAnimation("sprites/Picture1.png", "sprites/Picture2.png");
    thornImg      = loadImage("sprites/thorn.png");
    lostImg       = loadImage("sprites/Lost.png");
    nextLevelImg  = loadImage("sprites/nextLevel.png");
    arrowImg      = loadImage("sprites/arrow.png");
    gameOverImg   = loadImage("sprites/gameOver.png"); 
    restartImg    = loadImage("sprites/restart.png"); 
    sadDoraImg    = loadImage("sprites/sadDora.png"); 

    jungleImg     = loadImage("sprites/Jungle.png");
    monkeyImg     = loadImage("sprites/Monkey.png");
    lionImg       = loadImage("sprites/Lion.png");
    bearImg       = loadImage("sprites/Bear.png");
    snakeImg      = loadImage("sprites/Snake.png");
    doraWalkImg   = loadImage("sprites/Dora walk.png");
    treasureImg   = loadImage("sprites/Treasure.png");

    hillImg       = loadImage("sprites/Hill.png");
    doraImg       = loadImage("sprites/dora.png");
    swiperImg     = loadImage("sprites/Swiper.png");
    swiper1Img    = loadImage("sprites/Swiper.png");
    swiper2Img    = loadImage("sprites/Swiper2.png");
    swiper3Img    = loadImage("sprites/Swiper2.png");

    endImg        = loadImage("sprites/Endcard.png");
    handImg       = loadImage("sprites/hand.png");
    mazeImg       = loadImage("sprites/Maze.png");

    bgMusic       = loadSound("Dora.mp3");

}

//Creating sprites using variables
function setup () {
    
    createCanvas(1365, 653);

    obstaclesGroup = createGroup();

    openCard = createSprite(682, 326);
    openCard.addImage("card", opencardImg);
    openCard.scale = 1.4;

    playButton = createSprite(1200, 120);
    playButton.addImage("play", playButtonImg);
    playButton.scale = 0.099;

    l1 = createSprite(480, 580);
    l1.addImage("l1", l1Img);
    l1.scale = 0.7;
    l1.visible = false;

    l2 = createSprite(710, 580);
    l2.addImage("l2", l2Img);
    l2.scale = 0.7;
    l2.visible = false;

    l3 = createSprite(940, 580);
    l3.addImage("l3", l3Img);
    l3.scale = 0.7;
    l3.visible = false;

    fort = createSprite(600, 300);
    fort.addImage("fort", fortImg);
    fort.scale = 2.3;
    fort.visible = false;
    fort.velocityX = -1.2;

    doraRun = createSprite(200, 500);
    doraRun.addAnimation("doraRun", doraRunImg);
    doraRun.addAnimation("sadDora",sadDoraImg);
    doraRun.scale = 0.6;
    doraRun.visible = false; 
    doraRun.setCollider("rectangle",0,0,400,400); 

    invisibleGround = createSprite(600, 630, 1600, 10);
    invisibleGround.visible = false;

    gameOver = createSprite(700, 300, 100, 100);
    gameOver.addImage("gameOver", gameOverImg);
    gameOver.visible = false;

    nextLevel = createSprite(682, 326);
    nextLevel.addImage("nextLevel", nextLevelImg);
    nextLevel.visible = false;

    arrow = createSprite(682, 476);
    arrow.addImage("arrow", arrowImg);
    arrow.scale   = 0.3;
    arrow.visible = false;

    jungle = createSprite(682, 326);
    jungle.addImage("jungle", jungleImg);
    jungle.scale   = 2.2;
    jungle.visible = false;

    monkey = createSprite(1002, 600);
    monkey.addImage("monkey", monkeyImg);
    monkey.scale = 0.2;
    monkey.visible = false;

    lion = createSprite(682, 241);
    lion.addImage("lion", lionImg);
    lion.scale     = 0.07;
    lion.visible   = false;

    bear = createSprite(682, 170);
    bear.addImage("bear", bearImg);
    bear.scale     = 0.09;
    bear.visible   = false;

    snake = createSprite(737, 61);
    snake.addImage("snake", snakeImg);
    snake.scale     = 0.06;
    snake.visible   = false;

    doraWalk = createSprite(1152, 291);
    doraWalk.addImage("doraWalk", doraWalkImg);
    doraWalk.scale   = 0.062;
    doraWalk.visible = false;

    hill = createSprite(682, 326);
    hill.addImage("hill", hillImg);
    hill.scale   = 3.6;
    hill.visible = false;

    dora = createSprite(232, 326);
    dora.addImage("dora", doraImg);
    dora.scale   = 0.2;
    dora.visible = false;

    restart = createSprite(700, 450, 100, 100);
    restart.addImage("reset", restartImg);
    restart.scale = 0.3;
    restart.visible = false;

    swiper = createSprite(492, 26);
    swiper.addImage("swiper", swiperImg);
    swiper.scale     = 0.3;
    swiper.visible   = false;

    swiper1 = createSprite(932, 50);
    swiper1.addImage("swiper1", swiperImg);
    swiper1.scale   = 0.3;
    swiper1.visible = false;

    swiper2 = createSprite(1142, 650);
    swiper2.addImage("swiper2", swiper2Img);
    swiper2.scale   = 0.3;
    swiper2.visible = false;

    swiper3 = createSprite(722, 650);
    swiper3.addImage("swiper3", swiper2Img);
    swiper3.scale   = 0.3;
    swiper3.visible = false;

    paddle1 = createSprite(682, 01, 1300, 10);
    paddle1.visible = false;

    paddle2 = createSprite(682, 656, 1300, 10);
    paddle2.visible = false;

    final = createSprite(1267, 326, 150, 1700);
    final.visible = false;
    final.shapeColor = "#58A32C";

    hand = createSprite(1152, 226);
    hand.addImage(handImg);
    hand.scale = 0.2;
    hand.visible = false;

    paddle3 = createSprite(1162, 281, 5, 55);
    paddle3.visible = false;

    paddle4 = createSprite(1122, 256, 75, 5);
    paddle4.visible = false;

    paddle5 = createSprite(1122, 306, 80, 5);
    paddle5.visible = false;

    one = createSprite(1055, 130, 05, 252);
    one.shapeColor = "brown";
    one.visible = false;

    two = createSprite(285, 310, 05,612);
    two.shapeColor = "brown";
    two.visible = false;

    three = createSprite(670, 05, 773, 05);
    three.shapeColor = "brown";
    three.visible = false;

    four = createSprite(485, 615, 400, 05);
    four.shapeColor = "brown";
    four.visible = false;

    five = createSprite(1055, 130, 05, 252);
    five.shapeColor = "brown";
    five.visible = false;

    six = createSprite(1050, 445, 05, 277);
    six.shapeColor = "brown";
    six.visible = false;

    seven = createSprite(1015, 375, 05, 243);
    seven.shapeColor = "brown";
    seven.visible = false;

    eight = createSprite(1015, 565, 05, 35);
    eight.shapeColor = "brown";
    eight.visible = false;

    nine = createSprite(1015, 170, 05, 105);
    nine.shapeColor = "brown";
    nine.visible = false;

    ten = createSprite(900, 615, 370, 05);
    ten.shapeColor = "brown";
    ten.visible = false;

    eleven = createSprite(970, 275, 05, 263);
    eleven.shapeColor = "brown";
    eleven.visible = false;

    twelve = createSprite(940, 310, 05, 260);
    twelve.shapeColor = "brown";
    twelve.visible = false;

    thirteen = createSprite(902, 322, 05, 273);
    thirteen.shapeColor = "brown";
    thirteen.visible = false;

    fourteen = createSprite(865, 240, 05, 40);
    fourteen.shapeColor = "brown";
    fourteen.visible = false;

    fifteen = createSprite(865, 385, 05, 180);
    fifteen.shapeColor = "brown";
    fifteen.visible = false;

    sixteen = createSprite(830, 60, 05, 105);
    sixteen.shapeColor = "brown";
    sixteen.visible = false;

    seventeen = createSprite(790, 110, 05, 70);
    seventeen.shapeColor = "brown";
    seventeen.visible = false;

    eighteen = createSprite(650, 170, 05, 37);
    eighteen.shapeColor = "brown";
    eighteen.visible = false;

    nineteen = createSprite(510, 135, 05, 37);
    nineteen.shapeColor = "brown";
    nineteen.visible = false;

    twenty = createSprite(720, 530, 05, 37);
    twenty.shapeColor = "brown";
    twenty.visible = false;

    twentyone = createSprite(680, 530, 05, 37);
    twentyone.shapeColor = "brown";
    twentyone.visible = false;

    twentytwo = createSprite(720, 95, 05, 38);
    twentytwo.shapeColor = "brown";
    twentytwo.visible = false;

    twentythree = createSprite(680, 370, 05, 70);
    twentythree.shapeColor = "brown";
    twentythree.visible = false;

    twentyfour = createSprite(645, 385, 05, 38);
    twentyfour.shapeColor = "brown";
    twentyfour.visible = false;

    twentyfive = createSprite(680, 95, 05, 38);
    twentyfive.shapeColor = "brown";
    twentyfive.visible = false;

    twentysix = createSprite(610, 530, 05, 105);
    twentysix.shapeColor = "brown";
    twentysix.visible = false;

    twentyseven = createSprite(650, 547, 05, 75);
    twentyseven.shapeColor = "brown";
    twentyseven.visible = false;

    twentyeight = createSprite(465, 150, 05, 73);
    twentyeight.shapeColor = "brown";
    twentyeight.visible = false;

    twentynine = createSprite(465, 315, 05, 104);
    twentynine.shapeColor = "brown";
    twentynine.visible = false;

    thirty = createSprite(465, 495, 05, 180);
    thirty.shapeColor = "brown";
    thirty.visible = false;

    thirtyone = createSprite(425, 460, 05, 250);
    thirtyone.shapeColor = "brown";
    thirtyone.visible = false;

    thirtytwo = createSprite(430, 170, 05, 250);
    thirtytwo.shapeColor = "brown";
    thirtytwo.visible = false;

    hundredandtwelve = createSprite(390, 420, 05, 252);
    hundredandtwelve.shapeColor = "brown";
    hundredandtwelve.visible = false;

    thirtythree = createSprite(390, 100, 05, 107);
    thirtythree.shapeColor = "brown";
    thirtythree.visible = false;

    thirtyfour = createSprite(390, 220, 05, 71);
    thirtyfour.shapeColor = "brown";
    thirtyfour.visible = false;

    thirtyfive = createSprite(355, 200, 05, 106);
    thirtyfive.shapeColor = "brown";
    thirtyfive.visible = false;

    thirtysix = createSprite(360, 95, 05, 46);
    thirtysix.shapeColor = "brown";
    thirtysix.visible = false;

    thirtyseven = createSprite(320, 25, 05, 38);
    thirtyseven.shapeColor = "brown";
    thirtyseven.visible = false;

    thirtyeight = createSprite(320, 187, 05, 220);
    thirtyeight.shapeColor = "brown";
    thirtyeight.visible = false;

    fourty = createSprite(320, 387, 05, 107);
    fourty.shapeColor = "brown";
    fourty.visible = false;

    fourtyone = createSprite(320, 530, 05, 104);
    fourtyone.shapeColor = "brown";
    fourtyone.visible = false;
    
    fourtytwo = createSprite(350, 420, 05, 260);
    fourtytwo.shapeColor = "brown";
    fourtytwo.visible = false;

    fourtyfive = createSprite(1085, 460, 05, 305);
    fourtyfive.shapeColor = "brown";
    fourtyfive.visible = false;

    fourtysix = createSprite(850, 585, 405, 05);
    fourtysix.shapeColor = "brown";
    fourtysix.visible = false;

    fourtyseven = createSprite(935, 42, 140, 05);
    fourtyseven.shapeColor = "brown";
    fourtyseven.visible = false;

    fourtyeight = createSprite(635, 150, 250, 05);
    fourtyeight.shapeColor = "brown";
    fourtyeight.visible = false;

    fourtynine = createSprite(610, 42, 290, 05);
    fourtynine.shapeColor = "brown";
    fourtynine.visible = false;

    fifty = createSprite(960, 80, 185, 05);
    fifty.shapeColor = "brown";
    fifty.visible = false;

    fiftyone = createSprite(355, 45, 72, 05);
    fiftyone.shapeColor = "brown";
    fiftyone.visible = false;

    fiftytwo = createSprite(500, 260, 80, 05);
    fiftytwo.shapeColor = "brown";
    fiftytwo.visible = false;

    fiftythree = createSprite(935, 495, 05, 40);
    fiftythree.shapeColor = "brown";
    fiftythree.visible = false;

    fiftyfour = createSprite(372, 150, 38, 05);
    fiftyfour.shapeColor = "brown";
    fiftyfour.visible = false;

    fiftyfive = createSprite(410, 295, 42, 05);
    fiftyfive.shapeColor = "brown";
    fiftyfive.visible = false;

    fiftysix = createSprite(372, 255, 42, 05);
    fiftysix.shapeColor = "brown";
    fiftysix.visible = false;

    fiftyseven = createSprite(302, 332, 38, 05);
    fiftyseven.shapeColor = "brown";
    fiftyseven.visible = false;

    fiftyeight = createSprite(335, 295, 35, 05);
    fiftyeight.shapeColor = "brown";
    fiftyeight.visible = false;

    fiftynine= createSprite(485, 585, 42, 05);
    fiftynine.shapeColor = "brown";
    fiftynine.visible = false;

    sixty = createSprite(335, 440, 35, 05);
    sixty.shapeColor = "brown";
    sixty.visible = false;

    sixtyone = createSprite(370, 550, 42, 05);
    sixtyone.shapeColor = "brown";
    sixtyone.visible = false;

    hundredandthirteen = createSprite(372, 580, 112, 05);
    hundredandthirteen.shapeColor = "brown";
    hundredandthirteen.visible = false;

    sixtytwo = createSprite(480, 77, 40, 05);
    sixtytwo.shapeColor = "brown";
    sixtytwo.visible = false;

    hundredandfourteen= createSprite(340, 75, 40, 05);
    hundredandfourteen.shapeColor = "brown";
    hundredandfourteen.visible = false;

    sixtythree = createSprite(737, 110, 40, 05);
    sixtythree.shapeColor = "brown";
    sixtythree.visible = false;

    sixtyfour = createSprite(1070, 05, 40, 05);
    sixtyfour.shapeColor = "brown";
    sixtyfour.visible = false;

    sixtyfive = createSprite(810, 405, 40, 05);
    sixtyfive.shapeColor = "brown";
    sixtyfive.visible = false;

    sixtysix = createSprite(960, 510, 40, 05);
    sixtysix.shapeColor = "brown";
    sixtysix.visible = false;

    sixtyeight = createSprite(995, 405, 45, 05);
    sixtyeight .shapeColor = "brown";
    sixtyeight .visible = false;

    sixtyseven = createSprite(665, 510, 35, 05);
    sixtyseven.shapeColor = "brown";
    sixtyseven.visible = false;

    sixtynine = createSprite(537, 550, 74, 05);
    sixtynine.shapeColor = "brown";
    sixtynine.visible = false;

    seventy = createSprite(539, 515, 78, 05);
    seventy.shapeColor = "brown";
    seventy.visible = false;

    seventytwo = createSprite(753, 547, 70, 05);
    seventytwo.shapeColor = "brown";
    seventytwo.visible = false;

    seventythree = createSprite(925, 550, 185, 05);
    seventythree.shapeColor = "brown";
    seventythree.visible = false;

    seventyfour = createSprite(828, 510, 220, 05);
    seventyfour.shapeColor = "brown";
    seventyfour.visible = false;

    seventyfive = createSprite(773, 475, 330, 05);
    seventyfive.shapeColor = "brown";
    seventyfive.visible = false;

    seventysix = createSprite(922, 115, 190, 05);
    seventysix.shapeColor = "brown";
    seventysix.visible = false;

    seventyeight = createSprite(880, 145, 185, 05);
    seventyeight.shapeColor = "brown";
    seventyeight.visible = false;

    seventynine = createSprite(670, 257, 180, 05);
    seventynine.shapeColor = "brown";
    seventynine.visible = false;

    eighty = createSprite(775, 185, 260, 05);
    eighty.shapeColor = "brown";
    eighty.visible = false;

    eightyone = createSprite(610, 75, 143, 05);
    eightyone.shapeColor = "brown";
    eightyone.visible = false;

    eightytwo = createSprite(555, 222, 250, 05);
    eightytwo.shapeColor = "brown"
    eightytwo.visible = false;

    eightythree = createSprite(535, 365, 141, 05);
    eightythree.shapeColor = "brown";
    eightythree.visible = false;

    eightyfour = createSprite(573, 335, 220, 05);
    eightyfour.shapeColor = "brown";
    eightyfour.visible = false;

    eightyfive = createSprite(790, 330, 143, 05);
    eightyfive.shapeColor = "brown";
    eightyfive.visible = false;

    eightysix = createSprite(555, 405, 185, 05);
    eightysix.shapeColor = "brown";
    eightysix.visible = false;

    eightyseven = createSprite(795, 222, 140, 05);
    eightyseven.shapeColor = "brown";
    eightyseven.visible = false;

    eightyeight = createSprite(833, 256, 71, 05);
    eightyeight.shapeColor = "brown";
    eightyeight.visible = false;

    eightynine = createSprite(1050, 250, 75, 05);
    eightynine.shapeColor = "brown";
    eightynine.visible = false;

    ninety = createSprite(713, 405, 70, 05);
    ninety.shapeColor = "brown";
    ninety.visible = false;

    ninetyone = createSprite(812, 295, 110, 05);
    ninetyone.shapeColor = "brown";
    ninetyone.visible = false;

    ninetytwo = createSprite(755, 365, 150, 05);
    ninetytwo.shapeColor = "brown";
    ninetytwo.visible = false;

    ninetythree = createSprite(630, 295, 180, 05);
    ninetythree.shapeColor = "brown";
    ninetythree.visible = false;

    ninetyfour = createSprite(573, 115, 220, 05);
    ninetyfour.shapeColor = "brown";
    ninetyfour.visible = false;

    ninetyfive = createSprite(535, 185, 144, 05);
    ninetyfive.shapeColor = "brown";
    ninetyfive.visible = false;

    ninetysix = createSprite(520, 475, 105, 05);
    ninetysix.shapeColor = "brown";
    ninetysix.visible = false;

    ninetyeight = createSprite(1085, 125, 05, 250);
    ninetyeight.shapeColor = "brown";
    ninetyeight.visible = false;

    ninetynine = createSprite(670, 440, 325, 05);
    ninetynine.shapeColor = "brown";
    ninetynine.visible = false;

    hundred = createSprite(870, 60, 05, 43);
    hundred.shapeColor = "brown";
    hundred.visible = false;

    hundredandone = createSprite(755, 60, 05, 43);
    hundredandone.shapeColor = "brown";
    hundredandone.visible = false;

    hundredandtwo = createSprite(465, 58, 05, 43);
    hundredandtwo.shapeColor = "brown";
    hundredandtwo.visible = false;

    hundredandthree = createSprite(540, 275, 05, 43);
    hundredandthree.shapeColor = "brown";
    hundredandthree.visible = false;

    hundredandfour = createSprite(720, 313, 05, 40);
    hundredandfour.shapeColor = "brown";
    hundredandfour.visible = false;

    hundredandfive = createSprite(760, 275, 05, 43);
    hundredandfive.shapeColor = "brown";
    hundredandfive.visible = false;

    hundredandseven = createSprite(500, 533, 05, 40);
    hundredandseven.shapeColor = "brown";
    hundredandseven.visible = false;

    hundredandeight = createSprite(570, 580, 05, 67);
    hundredandeight.shapeColor = "brown";
    hundredandeight.visible = false;

    hundredandnine = createSprite(830, 403, 05, 80);
    hundredandnine.shapeColor = "brown";
    hundredandnine.visible = false;

    hundredandfifteen = createSprite(980, 497, 05, 110);
    hundredandfifteen.shapeColor = "brown";
    hundredandfifteen.visible = false;

    hundredandten = createSprite(1068, 310, 40, 05);
    hundredandten.shapeColor = "brown";
    hundredandten.visible = false;

    hundredandeleven = createSprite(773, 75, 40, 05);
    hundredandeleven.shapeColor = "brown";
    hundredandeleven.visible = false;

    win = createSprite(700, 635, 30, 20);
    win.visible = false;

}

function draw () {
    
    background("black");

    if(gameState == "initialState"){
        if(mousePressedOver(playButton)){
            playButton.visible = false;
            l1.visible         = true;
            l2.visible         = true;
            l3.visible         = true;
            bgMusic.loop();
        }
    
        if(mousePressedOver(l1)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            fort.visible     = true;
            doraRun.visible  = true;
            gameState        = "level1Play";

        }

        if(mousePressedOver(l2)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level2Play";
            move();
        }

        if(mousePressedOver(l3)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level3Play";
            stepUp();
        }
    }

    drawSprites();   

    if(gameState == "level1Play"){
        fort.visible = true;
        if(fort.x < 650) {
           fort.x = 700;
        }

         obstacle();

         textSize(35);
         stroke("yellow");
         fill("#ff006e");
         text("SCORE : " + score, 50, 60);

         textSize(28);
         //stroke("pink");
         fill("brown");
         textFont('Comic Sans Ms');
         text("PRESS SPACE TO JUMP AND REACH 500 TO MOVE TO NEXT LEVEL", 250, 100);

         if(keyDown("space")) {
            doraRun.velocityY = -12;
            score = score + 1;
         }

         //giving gravity to dora
         doraRun.velocityY = doraRun.velocityY + 5;

         //to make dora stand on the invisible line
         doraRun.collide(invisibleGround);

         if(obstaclesGroup.isTouching(doraRun)){
             gameState = "level1End";
         } 

         if(score > 500) {  
            gameState = "level2Play";
             reset();
         }     
 
         line = createSprite(680, 02, 1300, 10);
         line.visible = false;
         doraRun.collide(line);

    }

    if(gameState == "level1End"){
       fort.visible = false;
       doraRun.changeAnimation("sadDora",sadDoraImg);
       doraRun.scale = 0.23;
       gameOver.visible = true;
       restart.visible = true;
       doraRun.velocityY = 0;
       obstaclesGroup.setLifetimeEach(-1);
       obstaclesGroup.setVelocityXEach(0);

       if(mousePressedOver(restart)) {
        level1reset();
       }
    }

         if(gameState === "level2Play"){

            if(mousePressedOver(arrow)){
                move(); 
             }

        if (keyDown("LEFT_ARROW")) {
            doraWalk.x = doraWalk.x - 6;
        }

        if (keyDown("RIGHT_ARROW")) {
            doraWalk.x = doraWalk.x + 6;
        }

        if (keyDown("UP_ARROW")) {
            doraWalk.y = doraWalk.y - 6;
        }

        if (keyDown("DOWN_ARROW")) {
            doraWalk.y = doraWalk.y + 6;
        }

        if(dummy == 1){
            var m = color(random(0, 255), random(0, 255), random(0, 255));
            win.shapeColor = m;
            
            textSize(22);
            fill(m);
            text(" TOUCH HERE TO MOVE TO NEXT LEVEL", 730, 645);
        }     

        if(doraWalk.isTouching(win)) {
            gameState = "level3Play";
            reset2();
        }

        doraWalk.bounceOff(paddle3);
        doraWalk.bounceOff(paddle4);
        doraWalk.bounceOff(paddle5);
        monkey.bounceOff(fourtyfive);
        monkey.bounceOff(hundredandeight);

        lion.bounceOff(thirtytwo);
        lion.bounceOff(fourteen);

        bear.bounceOff(eleven);
        bear.bounceOff(eighteen);

        snake.bounceOff(hundredandone);
        snake.bounceOff(hundredandtwo);

        doraWalk.bounceOff(one);
        doraWalk.bounceOff(two);
        doraWalk.bounceOff(three);
        doraWalk.bounceOff(four);
        doraWalk.bounceOff(five);
        doraWalk.bounceOff(six);
        doraWalk.bounceOff(seven);
        doraWalk.bounceOff(eight);
        doraWalk.bounceOff(nine);
        doraWalk.bounceOff(ten);

        doraWalk.bounceOff(eleven);
        doraWalk.bounceOff(twelve);
        doraWalk.bounceOff(thirteen);
        doraWalk.bounceOff(fourteen);
        doraWalk.bounceOff(fifteen);
        doraWalk.bounceOff(sixteen);
        doraWalk.bounceOff(seventeen);
        doraWalk.bounceOff(eighteen);
        doraWalk.bounceOff(nineteen);
        doraWalk.bounceOff(twenty);

        doraWalk.bounceOff(twentyone);
        doraWalk.bounceOff(twentytwo);
        doraWalk.bounceOff(twentythree);
        doraWalk.bounceOff(twentyfour);
        doraWalk.bounceOff(twentyfive);
        doraWalk.bounceOff(twentysix);
        doraWalk.bounceOff(twentyseven);
        doraWalk.bounceOff(twentyeight);
        doraWalk.bounceOff(twentynine);
        doraWalk.bounceOff(thirty);

        doraWalk.bounceOff(thirtyone);
        doraWalk.bounceOff(thirtytwo);
        doraWalk.bounceOff(thirtythree);
        doraWalk.bounceOff(thirtyfour);
        doraWalk.bounceOff(thirtyfive);
        doraWalk.bounceOff(thirtysix);
        doraWalk.bounceOff(thirtyseven);
        doraWalk.bounceOff(thirtyeight);
        doraWalk.bounceOff(fourty);

        doraWalk.bounceOff(fourtyone);
        doraWalk.bounceOff(fourtytwo);
        doraWalk.bounceOff(fourtyfive);
        doraWalk.bounceOff(fourtysix);
        doraWalk.bounceOff(fourtyseven);
        doraWalk.bounceOff(fourtyeight);
        doraWalk.bounceOff(fourtynine);
        doraWalk.bounceOff(fifty);

        doraWalk.bounceOff(fiftyone);
        doraWalk.bounceOff(fiftytwo);
        doraWalk.bounceOff(fiftythree);
        doraWalk.bounceOff(fiftyfour);
        doraWalk.bounceOff(fiftyfive);
        doraWalk.bounceOff(fiftysix);
        doraWalk.bounceOff(fiftyseven);
        doraWalk.bounceOff(fiftyeight);
        doraWalk.bounceOff(fiftynine);
        doraWalk.bounceOff(sixty);

        doraWalk.bounceOff(sixty);
        doraWalk.bounceOff(sixtyone);
        doraWalk.bounceOff(sixtytwo);
        doraWalk.bounceOff(sixtythree);
        doraWalk.bounceOff(sixtyfour);
        doraWalk.bounceOff(sixtyfive);
        doraWalk.bounceOff(sixtysix);
        doraWalk.bounceOff(sixtyseven);
        doraWalk.bounceOff(sixtyeight);
        doraWalk.bounceOff(sixtynine);
        doraWalk.bounceOff(seventy);

        doraWalk.bounceOff(seventy);
        doraWalk.bounceOff(seventytwo);
        doraWalk.bounceOff(seventythree);
        doraWalk.bounceOff(seventyfour);
        doraWalk.bounceOff(seventyfive);
        doraWalk.bounceOff(seventysix);
        doraWalk.bounceOff(seventyeight);
        doraWalk.bounceOff(seventynine);
        doraWalk.bounceOff(eighty);

        doraWalk.bounceOff(eighty);
        doraWalk.bounceOff(eightyone);
        doraWalk.bounceOff(eightytwo);
        doraWalk.bounceOff(eightythree);
        doraWalk.bounceOff(eightyfour);
        doraWalk.bounceOff(eightyfive);
        doraWalk.bounceOff(eightysix);
        doraWalk.bounceOff(eightyseven);
        doraWalk.bounceOff(eightyeight);
        doraWalk.bounceOff(eightynine);
        doraWalk.bounceOff(ninety);

        doraWalk.bounceOff(ninety);
        doraWalk.bounceOff(ninetyone);
        doraWalk.bounceOff(ninetytwo);
        doraWalk.bounceOff(ninetythree);
        doraWalk.bounceOff(ninetyfour);
        doraWalk.bounceOff(ninetyfive);
        doraWalk.bounceOff(ninetysix);
        doraWalk.bounceOff(ninetyeight);
        doraWalk.bounceOff(ninetynine);
        doraWalk.bounceOff(hundred);

        doraWalk.bounceOff(hundred);
        doraWalk.bounceOff(hundredandone);
        doraWalk.bounceOff(hundredandtwo);
        doraWalk.bounceOff(hundredandthree);
        doraWalk.bounceOff(hundredandfour);
        doraWalk.bounceOff(hundredandfive);
        doraWalk.bounceOff(hundredandseven);
        doraWalk.bounceOff(hundredandeight);
        doraWalk.bounceOff(hundredandnine);
        doraWalk.bounceOff(hundredandten);

        doraWalk.bounceOff(hundredandeleven);
        doraWalk.bounceOff(hundredandtwelve);
        doraWalk.bounceOff(hundredandthirteen);
        doraWalk.bounceOff(hundredandfourteen);
        doraWalk.bounceOff(hundredandfifteen);

        if(doraWalk.isTouching(bear) || doraWalk.isTouching(snake) || doraWalk.isTouching(lion) || doraWalk.isTouching(monkey)) {
            doraWalk.x = 1152;
            doraWalk.y = 291;
        }

    }

    if(gameState === "level3Play"){

        textSize(25);
        fill("blue");
        stroke("red");
        text(" Congratulations level 1 and 2 is clear this is the last to get a treasure USE ARROW KEYS TO MOVE AND BEWARE OF THE SWIPERS!!! ", 20, 40);

        if(mousePressedOver(arrow)){
           stepUp(); 
         }

        swiper.bounceOff(paddle1);
        swiper.bounceOff(paddle2);

        swiper1.bounceOff(paddle1);
        swiper1.bounceOff(paddle2);

        swiper2.bounceOff(paddle1);
        swiper2.bounceOff(paddle2);

        swiper3.bounceOff(paddle1);
        swiper3.bounceOff(paddle2);

        dora.collide(paddle1);
        dora.collide(paddle2);

        if(keyDown("LEFT_ARROW")){
           dora.x = dora.x - 7;
        }

        if(keyDown("RIGHT_ARROW")){
            dora.x = dora.x + 7;
         }

         if(keyDown("UP_ARROW")){
            dora.y = dora.y - 7;
         }

         if(keyDown("DOWN_ARROW")){
            dora.y = dora.y + 7;
         }
        
        if(dora.isTouching(swiper) || dora.isTouching(swiper1) || dora.isTouching(swiper2) || dora.isTouching(swiper3)) {
            dora.x = 180;
            dora.y = 300;
        }

        if(dora.isTouching(final)){
            gameState = "level3end";
            
        }
        
        if(textTreasure == 1){
            noStroke();
            var c = color(random(0, 255), random(0, 255), random(0, 255));
            fill(c);
            textSize(30);
            text("YOUR ", 1220, 76);
            textSize(25);
            text("TREASURE ", 1200, 226);
            textSize(30);
            text("IS ", 1250, 376);
            text("HERE ", 1225, 526);
        }

    }  

    if (gameState == "level3end") {
            dora.visible      = false;
            hill.visible      = false;
            swiper.visible    = false;
            swiper1.visible   = false;
            swiper2.visible   = false;
            swiper3.visible   = false;
            final.visible     = false;
            nextLevel.visible = false;
            arrow.visible     = false;

            end = createSprite(682, 326);
            end.addImage("end",endImg);
            end.scale = 2;
            
            treasure = createSprite(182, 500, 100, 100);
            treasure.addImage("treasure", treasureImg);
            treasure.scale = 0.7;

            var a = color(random(0, 255), random(0, 255), random(0, 255));
            fill(a);
            textSize(35);
            text("YOU WON ", 82, 60);

            noStroke();
            var c = color(random(0, 255), random(0, 255), random(0, 255));
            fill(c);
            textSize(30);
            text("YOUR ", 1220, 76);
            textSize(25);
            text("TREASURE ", 1200, 226);
            textSize(30);
            text("IS ", 1250, 376);
            text("HERE ", 1225, 526);
            
    } 
}

function level1reset(){
    gameState        = "level1Play";
    gameOver.visible = false;
    restart.visible  = false; 
    doraRun.changeAnimation("doraRun", doraRunImg); 
    doraRun.scale    = 0.6;
    obstaclesGroup.destroyEach();
    score            = 0;
    openCard.destroy();
    l1.destroy();
    l2.destroy();
    l3.destroy();
}

//creating obstacles
function obstacle () {
    if(frameCount % 70 === 0) {
        thorn = createSprite(1350, 590, 40, 10);
        thorn.velocityX = -20;
        thorn.lifetime  = 150;
        thorn.addImage(thornImg);
        thorn.scale = 0.7;

        obstaclesGroup.add(thorn);
    }
}

function reset() {
    nextLevel.visible = true;
    arrow.visible     = true;
    doraRun.destroy();
    fort.destroy();
    obstaclesGroup.destroyEach();    
}

function reset2() {
    nextLevel.visible = true;
    arrow.visible     = true;
    
    snake.destroy();
    lion.destroy();
    monkey.destroy();
    bear.destroy();

    hand.destroy();
    win.destroy();

    jungle.destroy();
    monkey.destroy();
    lion.destroy();
    bear.destroy();
    snake.destroy();

    doraWalk.destroy();

    one.destroy();
    two.destroy();
    three.destroy();
    four.destroy();
    five.destroy();
    six.destroy();
    seven.destroy();
    eight.destroy();
    nine.destroy();
    ten.destroy();

    eleven.destroy();
    twelve.destroy();
    thirteen.destroy();
    fourteen.destroy();
    fifteen.destroy();
    sixteen.destroy();
    seventeen.destroy();
    eighteen.destroy();
    nineteen.destroy();
    twenty.destroy();

    twentyone.destroy();
    twentytwo.destroy();
    twentythree.destroy();
    twentyfour.destroy();
    twentyfive.destroy();
    twentysix.destroy();
    twentyseven.destroy();
    twentyeight.destroy();
    twentynine.destroy();
    thirty.destroy();

    thirtyone.destroy();
    thirtytwo.destroy();
    thirtythree.destroy();
    thirtyfour.destroy();
    thirtyfive.destroy();
    thirtysix.destroy();
    thirtyseven.destroy();
    thirtyeight.destroy();
    fourty.destroy();

    fourtyone.destroy();
    fourtytwo.destroy();
    fourtyfive.destroy();
    fourtysix.destroy();
    fourtyseven.destroy();
    fourtyeight.destroy();
    fourtynine.destroy();
    fifty.destroy();

    fiftyone.destroy();
    fiftytwo.destroy();
    fiftythree.destroy();
    fiftyfour.destroy();
    fiftyfive.destroy();
    fiftysix.destroy();
    fiftyseven.destroy();
    fiftyeight.destroy();
    fiftynine.destroy();
    sixty.destroy();

    sixtyone.destroy();
    sixtytwo.destroy();
    sixtythree.destroy();
    sixtyfour.destroy();
    sixtyfive.destroy();
    sixtysix.destroy();
    sixtyseven.destroy();
    sixtyeight.destroy();
    sixtynine.destroy();
    seventy.destroy();

    seventytwo.destroy();
    seventythree.destroy();
    seventyfour.destroy();
    seventyfive.destroy();
    seventysix.destroy();
    seventyeight.destroy();
    seventynine.destroy();
    eighty.destroy();

    eightyone.destroy();
    eightytwo.destroy();
    eightythree.destroy();
    eightyfour.destroy();
    eightyfive.destroy();
    eightysix.destroy();
    eightyseven.destroy();
    eightyeight.destroy();
    eightynine.destroy();
    ninety.destroy();

    ninetyone.destroy();
    ninetytwo.destroy();
    ninetythree.destroy();
    ninetyfour.destroy();
    ninetyfive.destroy();
    ninetysix.destroy();
    ninetyeight.destroy();
    ninetynine.destroy();
    hundred.destroy();

    hundredandone.destroy();
    hundredandtwo.destroy();
    hundredandthree.destroy();
    hundredandfour.destroy();
    hundredandfive.destroy();
    hundredandseven.destroy();
    hundredandeight.destroy();
    hundredandnine.destroy();
    hundredandten.destroy();

    hundredandeleven.destroy();
    hundredandtwelve.destroy();
    hundredandthirteen.destroy();
    hundredandfourteen.destroy(); 
    hundredandfifteen.destroy();


}

function move() {
    gameState = "level2Play";

    dummy = 1;

    snake.velocityX  = 2;
    lion.velocityX   = 4;
    monkey.velocityX = 4;
    bear.velocityX   = 4;

    hand.visible     = true;
    win.visible      = true;
    openCard.visible = false;
    l1.visible       = false;
    l2.visible       = false;
    l3.visible       = false;

    jungle.visible   = true;
    monkey.visible   = true;
    lion.visible     = true;
    bear.visible     = true;
    snake.visible    = true;

    doraWalk.visible = true;

    one.visible   = true;
    two.visible   = true;
    three.visible = true;
    four.visible  = true;
    five.visible  = true;
    six.visible   = true;
    seven.visible = true; 
    eight.visible = true; 
    nine.visible  = true;
    ten.visible   = true;

    eleven.visible    = true;
    twelve.visible    = true;
    thirteen.visible  = true;
    fourteen.visible  = true;
    fifteen.visible   = true;
    sixteen.visible   = true;
    seventeen.visible = true;
    eighteen.visible = true;
    nineteen.visible  = true;
    twenty.visible    = true;

    twentyone.visible    = true;
    twentytwo.visible    = true;
    twentythree.visible  = true;
    twentyfour.visible   = true;
    twentyfive.visible   = true;
    twentysix.visible    = true;
    twentyseven.visible  = true;
    twentyeight.visible  = true;
    twentynine.visible   = true;
    thirty.visible       = true;

    thirtyone.visible    = true;
    thirtytwo.visible    = true;
    thirtythree.visible  = true;
    thirtyfour.visible   = true;
    thirtyfive.visible   = true;
    thirtysix.visible    = true;
    thirtyseven.visible   = true;
    thirtyeight.visible  = true;
    fourty.visible       = true;

    fourtyone.visible   = true;
    fourtytwo.visible   = true;
    fourtyfive.visible  = true;
    fourtysix.visible   = true;
    fourtyseven.visible = true;
    fourtyeight.visible = true;
    fourtynine.visible  = true;
    fifty.visible       = true;

    fiftyone.visible    = true;
    fiftytwo.visible    = true;
    fiftythree.visible  = true;
    fiftyfour.visible   = true;
    fiftyfive.visible   = true;
    fiftysix.visible    = true;
    fiftyseven.visible  = true;
    fiftyeight.visible  = true;
    fiftynine.visible   = true;
    sixty.visible       = true;

    sixtyone.visible    = true;
    sixtytwo.visible    = true;
    sixtythree.visible  = true;
    sixtyfour.visible   = true;
    sixtyfive.visible   = true;
    sixtysix.visible    = true;
    sixtyseven.visible  = true;
    sixtyeight.visible  = true;
    sixtynine.visible   = true;
    seventy.visible     = true;

    seventytwo.visible   = true;
    seventythree.visible = true;
    seventyfour.visible  = true;
    seventyfive.visible  = true;
    seventysix.visible   = true;
    seventyeight.visible = true;
    seventynine.visible  = true;
    eighty.visible       = true;

    eightyone.visible   = true;
    eightytwo.visible   = true;
    eightythree.visible = true;
    eightyfour.visible  = true;
    eightyfive.visible  = true;
    eightysix.visible   = true;
    eightyseven.visible = true;
    eightyeight.visible = true;
    eightynine.visible  = true;
    ninety.visible      = true;

    ninetyone.visible   = true;
    ninetytwo.visible   = true;
    ninetythree.visible = true;
    ninetyfour.visible  = true;
    ninetyfive.visible  = true;
    ninetysix.visible   = true;
    ninetyeight.visible = true;
    ninetynine.visible  = true;
    hundred.visible     = true;

    hundredandone.visible   = true;
    hundredandtwo.visible   = true;
    hundredandthree.visible = true;
    hundredandfour.visible  = true;
    hundredandfive.visible  = true;
    hundredandseven.visible = true;
    hundredandeight.visible = true;
    hundredandnine.visible  = true;
    hundredandten.visible   = true;

    hundredandeleven.visible   = true;
    hundredandtwelve.visible   = true;
    hundredandthirteen.visible = true;
    hundredandfourteen.visible = true; 
    hundredandfifteen.visible  = true;
    
}

function stepUp () {

  gameState        = "level3Play";
  textTreasure     = 1;

  openCard.visible = false;
  l1.visible       = false;
  l2.visible       = false;
  l3.visible       = false;

  hill.visible    = true;
  dora.visible    = true;
  swiper.visible  = true;
  swiper1.visible = true;
  swiper2.visible = true;
  swiper3.visible = true;

  final.visible   = true;

  swiper.velocityY  = 15;
  swiper1.velocityY = 15;
  swiper2.velocityY = 15;
  swiper3.velocityY = 15;
   
}