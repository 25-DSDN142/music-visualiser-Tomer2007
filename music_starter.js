
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
/////////////////Parameters////////////////////////
   background(93, 167, 217);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
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

   function text1 (){
   textSize(2);
   fill(0);
   textAlign(CENTER);
   textSize(vocal*2);
   text(words, width/2, height/3);
   }
   function text2 (){
   fill(227, 103, 45);
 
   textAlign(CENTER);
   textSize(400);
   text(words, width/2, height/2);
   }

   function FlowerPetals(){
      beginShape();
      fill(219, 193, 20);
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
      let BeeX = 100+i*200 + frameCount*2;
      let BeeXchange = 1;
      let BeeY = 100+i*10 + frameCount*0.2;
      let BeeYchange = 1;
      
      let BeeBass = map(bass, 0, 100, 0, 15);
      BeeXchange = random(-BeeBass,BeeBass);
      BeeYchange = random(-BeeBass,BeeBass);
      

      BeeX = BeeX - BeeXchange;
      BeeY = BeeY - BeeYchange;
      
      while (BeeX > 1500){
         BeeX = BeeX - 1600;
      }

      while (BeeY > 300){
         BeeY = BeeY - 360;
      }
      
      //translate
      noStroke();
      ellipse(BeeX,BeeY,100,50);
      
   }
   }

   function FlowerField (){
      for (i=0; i< 18; i++){
      let lengthSpeed = 0.8+(0.02*drum);
   
      if (frameCount < 922) { 
        FlowerX = (100-i*140) + frameCount*0.5;
      }
      else if (frameCount < 1700){
        FlowerX = (10-i*140) + frameCount*1;
      }
      else {
         FlowerX = (100-i*140) + frameCount*4;
      }
      
      // 0.6 = + 380,  0.3 = + 195 
      
      while (FlowerX > 1950){
         FlowerX = FlowerX - 2100;
      }

      if(FlowerX > 1 && FlowerX < 320) {
         flower_length = map(other, 0, 100,(200+FlowerX*lengthSpeed), (300+FlowerX*lengthSpeed));
      }  
      else if (FlowerX > 319 && FlowerX < 780)  {
         flower_length = map(other,0,100,(200+(65*(lengthSpeed*10)))-(FlowerX*lengthSpeed),300+(65*(lengthSpeed*10))-(FlowerX*lengthSpeed));
      }
      else if (FlowerX > 779 && FlowerX < 1100)  {
         flower_length = map(other,0,100,200+(-105*(lengthSpeed*10))+(FlowerX*lengthSpeed),300+(-105*(lengthSpeed*10))+(FlowerX*lengthSpeed));
      }
      else if (FlowerX > 1299) {
         flower_length = map(other,0,100,(200+(-65*(lengthSpeed*10)))-(FlowerX*lengthSpeed),300+(65*(lengthSpeed*10))-(FlowerX*lengthSpeed));   
      }
      else{
         flower_length = map(other, 0, 100,200, 300);
      }
      noStroke();
      fill(56, 140, 20);


      rect(FlowerX,350,20,flower_length*0.8);

      //applyMatrix();
      FlowerY = 300 - flower_length*0.3;
      //rotate(i + frameCount, [FlowerX, FlowerX, FlowerY]);
      FlowerPetals();
      //resetMatrix();

      fill(54, 37, 9);
      ellipse(FlowerX,300-flower_length*0.3,40,40);
      
      fill(79, 189, 32);
      ellipse(350,400,900,220);
      ellipse(1050,380,900,200);

      }
   }

   
   ////////////////////Render///////////////////////
   Bars();
   text2();
   FlowerField();
   FunnyBee();
  
   
   text1();
}