let img
let cnv
let button
let output
let cx,cy


function setup() {
cnv =createCanvas(800, 830);
 cx = floor((windowWidth - cnv.width) / 2);
   cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image', width/2, 10, 100);
  button = createButton("Click for new image, (change of color shows you have clicked)")
  button.mousePressed(doit)
  button.size(300,300)
  button.position(cx,cy+cnv.height+30)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
   
  img = await createImg("https://image.pollinations.ai/prompt/city%20sidwalk%20bricks%20painted%20with%20warning%20%20in%20chinese%20do%20not%20park%20here%20and%20a%20stencil%20image%20of%20of%20a%20bicycle?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
 img.position(cx,cy)
 //cnv.image(img,0,0)
   
}