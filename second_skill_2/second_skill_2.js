var contents = "";
var font1;
var myText="Vincent Willem van Gogh (Dutch: [ˈvɪnsənt ˈʋɪləm vɑŋ ˈɣɔx] ( listen); 30 March 1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.";
function preload (){
   font1 = loadFont('data/Comicsan2.otf');
}

function setup() {
 createCanvas (windowWidth, windowHeight);
 background(0) ;
 fill(255);
 textFont(font1) ;
 textSize(32) ;

}



function draw() {
  background(0) ;
  text(contents, width/20, height/20, 0.9*width, height/1.5);

}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}
function keyTyped() {
  contents += key;
}
