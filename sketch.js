let img
let cnv
let button
let output


function setup() {
cnv =createCanvas(800, 830);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image', width/2, 10, 100);
  button = createButton("Click for new image")
  button.mousePressed(doit)
  button.position(cnv.width/2,cnv.height+50)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
   
  img = await createImg("https://image.pollinations.ai/prompt/city%20sidwalk%20bricks%20painted%20with%20warning%20%20in%20chinese%20do%20not%20park%20here%20and%20a%20stencil%20image%20of%20of%20a%20bicycle?width=800&height=800&nologo=true&seed="+floor(random(255)),"street scene")
 img.position(cnv.position.x,cnv.position.y)
 button.html("click for new image")
   
}