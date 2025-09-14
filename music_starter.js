
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, words2, vocal, drum, bass, other, counter) {
/////////////////Parameters////////////////////////
   background(237, 72, 17);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  FlowerBaseY = 80;
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   if (frameCount < 922){
      fps = frameCount*0.5
   }
    else if (frameCount < 1680){
        fps = frameCount;
      }
      else if (frameCount < 2530){
        fps = frameCount*1.2;
      }
      else if (frameCount >  2530 && frameCount < 3787){
        fps = frameCount*0.3;
      }
      else {
         fps = frameCount*3;
      }
   

      
 ////////////////Functions////////////////////////
   
   function Bars(){
   // changes 
   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   } 

   function Tyler (){
      tylerSize = map(vocal, 0, 100, 1, 1.2);
      image(img_1, 550, 220-tylerSize, 580*tylerSize, 837*tylerSize, 880, 450);
   }

   function text1 (){
   textSize(2);
   fill(0);
   textAlign(CENTER);
   textSize(vocal*2.3);
   text(words, width/2, height/3);
   }
   
   function text2 (){
   fill(227, 103, 45);
   textAlign(CENTER);
   textSize(350);
   text(words2, width/2, height/2 - 70);
   }

   function FlowerPetals(){
      beginShape();
      fill(255, 224 - FieldHue, 43);
      vertex(FlowerX-15, FlowerY-40);
      vertex(FlowerX, FlowerY-80);
      vertex(FlowerX+15, FlowerY-40);
      vertex(FlowerX+55, FlowerY-60);
      vertex(FlowerX+30, FlowerY-20);
      vertex(FlowerX+70, FlowerY-5);
      vertex(FlowerX+30, FlowerY+10);
      vertex(FlowerX+55, FlowerY+50);
      vertex(FlowerX+15, FlowerY+30);
      vertex(FlowerX, FlowerY+80);
      vertex(FlowerX-15, FlowerY+30);
      vertex(FlowerX-55, FlowerY+50);
      vertex(FlowerX-30, FlowerY+10);
      vertex(FlowerX-70, FlowerY-5);
      vertex(FlowerX-30, FlowerY-20);
      vertex(FlowerX-55, FlowerY-60);
      endShape();
      
   }

   function FunnyBee(){
     for (i=0; i<8;i++){
      BeeX = 0+i*200 + frameCount*2;
      let BeeXchange = 1;
      let BeeYchange = 1;
      
      let BeeBass = map(bass, 0, 100, 0, 15);
      BeeXchange = random(-BeeBass,BeeBass);
      BeeYchange = random(-BeeBass,BeeBass);
      
      
      
   
         BeeY = 500+i*10 + i*frameCount*0.2;
      

      BeeX = BeeX - BeeXchange;
      BeeY = BeeY - BeeYchange;
      
      while (BeeX > 1500){
         BeeX = BeeX - 1600;
      }
      while (BeeY > 400){
         BeeY = BeeY - 500;
      }
      if (BeeY < 50){
         BeeYchange = 0;
      }
      
      //translate
      image(img_3, BeeX, BeeY, 202, 202);

      
   }
   }

   function SingingBee(){
      
      BeeSize = map(vocal, 1, 100, 162, 232);
      let BeeBass = map(bass, 0, 100, 0, 5);
      BeeChange = random(-BeeBass,BeeBass);
      BeeX = BeeX - BeeChange;
      BeeY = BeeY - BeeChange;

      image(img_2, BeeX, BeeY, BeeSize, BeeSize);
   }

   function FlowerField (){
      for (i=0; i< 18; i++){
      let lengthSpeed = drum*0.04;
   
      if (frameCount < 922) { 
        FlowerX = (100 - FieldOffset -i*140) + fps;
      }
      else if (frameCount < 1680){
        FlowerX = (-335- FieldOffset-i*140) + fps;
      }
      else if (frameCount < 2530){
        FlowerX = (-355- FieldOffset-i*140) + fps;
      }
      else if (frameCount > 2530 && frameCount < 3787){
        FlowerX = (360 - FieldOffset-i*140) + fps;
      }
      else {
         FlowerX = (100- FieldOffset-i*140) + fps;
      }
      
      // 0.6 = + 380,  0.3 = + 195 
      
      while (FlowerX > 1950){
         FlowerX = FlowerX - 2100;
      }

      if(FlowerX > -100 && FlowerX < 320) {
         flower_length = map(other, 0, 100,(FlowerBaseY + 30+FlowerX*lengthSpeed), (FlowerBaseY + 130+FlowerX*lengthSpeed));
      }  
      else if (FlowerX > 319 && FlowerX < 760)  {
         flower_length = map(other,0,100,(FlowerBaseY + 30+(65*(lengthSpeed*10)))-(FlowerX*lengthSpeed),FlowerBaseY + 130+(65*(lengthSpeed*10))-(FlowerX*lengthSpeed));
      }
      else if (FlowerX > 759 && FlowerX < 1100)  {
         flower_length = map(other,0,100,FlowerBaseY + 30+(-89*(lengthSpeed*10))+(FlowerX*lengthSpeed),FlowerBaseY + 130+(-89*(lengthSpeed*10))+(FlowerX*lengthSpeed));
      }
      else if (FlowerX > 1099) {
         flower_length = map(other,0,100,(FlowerBaseY + 30+(130*(lengthSpeed*10)))-(FlowerX*lengthSpeed),FlowerBaseY + 130+(130*(lengthSpeed*10))-(FlowerX*lengthSpeed));   
      }
      else{
         flower_length = map(other, 0, 100,200, 300);
      }
      noStroke();
      fill(36, 105, 18);

      if (flower_length > 0) {
      rect(FlowerX,FieldY+50,20,flower_length*0.8);
      }
      //applyMatrix();
      FlowerY = FieldY - flower_length*0.3;
      //rotate(i + frameCount, [FlowerX, FlowerX, FlowerY]);
      FlowerPetals();
      //resetMatrix();

      fill(92, 63 - FieldHue, 17);
      ellipse(FlowerX,FieldY-flower_length*0.3,40,40);
      fill(74, 52 - FieldHue, 16);
      ellipse(FlowerX,FieldY-flower_length*0.3,25,25);
      fill(54, 37 - FieldHue, 9);
      ellipse(FlowerX,FieldY-flower_length*0.3,15,15);
     
      fill(32, 138 - FieldHue, 6);
      ellipse(350 - FieldOffset*2, FieldY + 100,900,300);
      ellipse(1050 - FieldOffset*2, FieldY + 80,900,200);

      fill(29, 117 - FieldHue, 7);
      ellipse(350 - FieldOffset*2, FieldY + 120,900,250);
      ellipse(1070 - FieldOffset*2, FieldY + 100,800,160);

      }
   }

   function SpinningFlower () {
      fill(51, 163, 23);
      rect(FlowerX+10*FlowerScale,FlowerY+200*FlowerScale, 35,400*FlowerScale);
      flowerSpin = map(drum, 1, 100, -90,90);
      push();
      imageMode(CENTER);
      translate(FlowerX, FlowerY+6);
      rotate(flowerSpin);
      image(img_4, 0, 0, 300*FlowerScale, 300*FlowerScale);
      pop();
   }

   function Sun (){
   let sunScale = map(vocal,0,100,0,115);
   fill(230, 109, 16);
   ellipse(640,320,100+(sunScale*2),100+(sunScale*2));
   fill(242, 181, 58);
   ellipse(640,320,30+sunScale*2.8,30+sunScale*2.8);
   fill(252, 207, 116);
   ellipse(640,320,20+sunScale*2.5,20+sunScale*2.5);
   fill(255);
   ellipse(640,320,10+sunScale*2.1,10+sunScale*2.1);
   }

   function Sky () {
      fill(252, 121, 56);
      ellipse(640, 420, 1580, 880);
      fill(250, 136, 65);
      ellipse(640, 440, 1380, 780);
      fill(245, 151, 73);
      ellipse(640, 410, 1180, 580);

      fill(247, 165, 82);
      ellipse(640, 370, 880, 380);

      cloudX = frameCount*0.5;
      cloudX2 = 700 + frameCount*0.3 + other*0.2;
      cloudX3 = -300 + frameCount*0.35 + other*0.1;

       while (cloudX > 1420){
         cloudX = cloudX - 1660;
      }
      
      while (cloudX2 > 1480){
         cloudX2 = cloudX2 - 1750;
      }

      while (cloudX3 > 1480){
         cloudX3 = cloudX3 - 1550;
      }

      fill(255, 209, 140);
      ellipse(cloudX+100, 100, 300, 100);
      ellipse(cloudX+70, 70, 160, 120);
      fill(252, 228, 179);
      ellipse(cloudX+120, 95, 280, 90);
      ellipse(cloudX+80, 60, 140, 100);

      fill(255, 209, 140);
      ellipse(cloudX2+50, 150, 400, 100);
      ellipse(cloudX2+110, 120, 160, 120);
      fill(252, 228, 179);
      ellipse(cloudX2+40, 142, 330, 80);
      ellipse(cloudX2+100, 105, 130, 90);

      fill(255, 209, 140);
      ellipse(cloudX3+70, 200, 400, 100);
      ellipse(cloudX3+40, 170, 160, 150);
      fill(252, 228, 179);
      ellipse(cloudX3+110, 193, 330, 90);
      ellipse(cloudX3+60, 145, 120, 80);
   }
   
   ////////////////////Render///////////////////////
   Sky();

   Bars();
   text2();
   Sun();


   FieldOffset = 70;
   FieldHue = 65;
   FieldY = 300;
   FlowerField();

   FieldOffset = 0;
   FieldHue = 45;
   FieldY = 400;
   FlowerField();

   FunnyBee();

   FieldOffset = 70;
   FieldHue = 20;
   FieldY = 500;
   FlowerField();

   FieldOffset = 0;
   FieldHue = -10;
   FieldY = 600;
   FlowerField();
   
   text1();

   Tyler();
   BeeX = 550;
   BeeY = 200;
   SingingBee();


   FlowerX = 100;
   FlowerY = 450;
   FlowerScale = 0.8;
   SpinningFlower();
   FlowerX = 20;
   FlowerY = 600;
   FlowerScale = 0.9;
   SpinningFlower();
   FlowerX = 400;
   FlowerY = 550;
   FlowerScale = 1.1;
   SpinningFlower();
   FlowerX = 200;
   FlowerY = 590;
   FlowerScale = 1;
   SpinningFlower();
   FlowerX = 540;
   FlowerY = 630;
   FlowerScale = 0.7;
   SpinningFlower();
   FlowerX = 690;
   FlowerY = 680;
   FlowerScale = 0.5;
   SpinningFlower();
   FlowerX = 1050;
   FlowerY = 580;
   FlowerScale = 1;
   SpinningFlower();
   FlowerX = 850;
   FlowerY = 600;
   FlowerScale = 0.9;
   SpinningFlower();
   FlowerX = 950;
   FlowerY = 700;
   FlowerScale = 0.6;
   SpinningFlower();
   FlowerX = 1200;
   FlowerY = 400;
   FlowerScale = 0.9;
   SpinningFlower();
   FlowerX = 1250;
   FlowerY = 620;
   FlowerScale = 1.1;
   SpinningFlower();
   
 
  
  
   
}