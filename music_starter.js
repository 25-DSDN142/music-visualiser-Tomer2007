
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
   let fps = 100+vocal*5;
   frameRate(fps);
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

   function Bones(){
      for (i=0; i< 70; i++){
      let lengthSpeed = 0.5;
      let boneX = (100-i*100) + frameCount;
     // if (boneX > 640) {
      //   boneX = 0;
     // }
      

      if(boneX > 1 && boneX < 320) {
         bone_length = map(bass, 0, 100,(200+boneX*lengthSpeed), (300+boneX*lengthSpeed));
      }  
      else if (boneX > 319)  {
         bone_length = map(bass,0,100,(200+(320*lengthSpeed))-(boneX*lengthSpeed),(300+(320*lengthSpeed))-(boneX*lengthSpeed));
      }
      else{
         bone_length = map(bass, 0, 100,200, 300);
      }
      noStroke();
      fill(255);


      rect(boneX,480,50,bone_length);
      ellipse(boneX-20,(480-bone_length*0.5),40,50);
      ellipse(boneX+20,(480-bone_length*0.5),40,50);
      }
   }
   ////////////////////Render///////////////////////
   
   Bars();
   Bones();


}