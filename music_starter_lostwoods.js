
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
/////////////////Parameters////////////////////////
   background(149, 174, 201)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 ////////////////Functions////////////////////////
   function Navi() {
   push();
   let naviXpos = -80;
   let naviYpos = map(other,0,100,0,10)+map(vocal,0,100,100,200);
   let naviScale = map(other,0,100,0,1)+map(vocal,0,100,0,115);
   stroke(156, 197, 230); 
   translate(naviXpos,naviYpos)
   fill(255);
   ellipse(250,70,50,100);
   noStroke();
   fill(235);
   ellipse(310,70,50,100);
   fill(44, 136, 212);
   ellipse(300,100,100+(naviScale*0.1),100+(naviScale*0.1));
   fill(73, 155, 222);
   ellipse(300,100,30+naviScale*1.8,30+naviScale*1.8);
   fill(112, 174, 224);
   ellipse(300,100,20+naviScale*1.5,20+naviScale*1.5);
   fill(255);
   ellipse(300,100,10+naviScale*1.1,10+naviScale*1.1);
   pop();
   }
   function Trees(){
      for(i=0; i<5; i++){
      TreeX = i*150;
      yDisplacement = 10+i;
      TreeY = map(bass,0,100,140,80) + yDisplacement;
      noStroke();
      fill(110, 67, 46);
      rect(TreeX,TreeY+100,90,350);
      fill(53, 140, 10);
      ellipse(TreeX,TreeY-10,200,200);
      fill(95, 184, 51);
      ellipse(TreeX-20,TreeY-40,150,140);
      }
   }
   function MasterSword(){
      push();
      let swordX = 250;
      let swordY = 80;
     translate(swordX,swordY);
      let sword = color(132, 186, 196);
      let glow = color(255, 255, 255);
      let lerpAmt = map(drum,0,100,0,1);
      let changingColor = lerpColor(sword, glow, lerpAmt*1.1);
      stroke(169, 205, 212);
      fill(changingColor);
      beginShape();
      vertex(200,130);
      vertex(200,140);
      vertex(190,150);
      vertex(200,160);
      vertex(200,300);
      vertex(210,330);
      vertex(220,300);
      vertex(220,160);
      vertex(230,150);
      vertex(220,140);
      vertex(220,130);
      endShape();
      noStroke();
      fill(68, 92, 184);
      beginShape();
      vertex(200,130);
      vertex(180,140);
      vertex(170,160);
      vertex(160,120);
      vertex(165,110);
      vertex(180,100);
      vertex(190,105);

      vertex(200,100);
      vertex(200,60);
      vertex(208,50);
      vertex(212,50);
      vertex(220,60);
      vertex(220,100);

      vertex(230,105);
      vertex(240,100);
      vertex(255,110);
      vertex(260,120);
      vertex(250,160);
      vertex(240,140);
      vertex(220,130);
      endShape();

      fill(230, 216, 64);
      ellipse(210,115,10,20);

      fill(89, 89, 88);
      ellipse(210,310,180,100);
      fill(117, 117, 117);
      ellipse(200,300,160,80);
      pop();
   }
   function Grass(){
      fill(64, 122, 34);
      ellipse(300,450,1000,200);
      fill(102, 179, 64);
      ellipse(300,410,600,100);
   }
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
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
   } 

   ////////////////////Render///////////////////////
   Trees();
   Navi();
   Grass();
   MasterSword();
   
   noStroke();
   fill(82, 51, 36);
   rect(600,100,90,1000);
   rect(60,110,90,1000);
   fill(33, 74, 13);
   ellipse(600,20,300,300);
   ellipse(60,30,300,300);
  
   ellipse(110,430,200,200);
   ellipse(190,450,200,120);
   ellipse(600,430,180,210);
   ellipse(520,450,210,140);
  // Bars();



}