let kick, snare, snare2, bass, electricSample;
let fftK, fftS, fftS2, fftB, fftE;
let ampKick, ampSnare, ampSnare2, ampbass, ampEsample, homehated;

let data;
let gif1

function preload() {
  soundFormats('mp3', 'ogg');
  loadSounds()
}



function setup() {

}


function draw(){
  getVals("range1", "#gif1")
  getVals("range2", "#gif2")
  getVals("range3", "#gif3")
  getVals("range4", "#gif4")
  getVals("range5", "#gif5")
  getVals("range6", "#gif6")
  getVals("range7", "#gif7")
  getVals("range8", "#gif8")


}


function getVals(range, gif) {

  let slider = document.getElementById(range);
  let alphaVal = map(slider.value,0,100,0,1)
  $(gif).css('opacity', `${alphaVal}`)
  let sizeVal = alphaVal*5
  $(gif).css('transform', `scale(`+sizeVal+`)`)
}


function setBgImage(fileName){
    $("html").css('background-image', 'url('+fileName+')');
}

let yy;
let x;
let imgmade1 = false;
let imgmade2 = false;


$(document).keydown(function(e){

  if(e.key == "q"){
    $("#gif1").attr('src','https://media.giphy.com/media/bGPTxLislwm3u/giphy.gif');
    $("#gif1").addClass("opClass");
    setBgImage("https://media.giphy.com/media/8qrmcwwJnW5XaLJQUB/giphy.gif");
    snare.play();
  }


  else if (e.key == "w" && imgmade1 == false) {
    snare2.play();
    $("#gif2").attr('src','https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif');
    $("#gif2").addClass("opClass");
    setBgImage("https://media.giphy.com/media/13hxeOYjoTWtK8/giphy.gif");
    x = createImg('https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif');
    imgmade1 = true
    // var x = createElement("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Inside_the_Batad_rice_terraces.jpg/220px-Inside_the_Batad_rice_terraces.jpg");
    // x.setAttribute("width", "304");
    }
  else if (e.key == "s" && imgmade1 == true) {
    snare.play();
    x.remove()
    imgmade1 = false
    }

    else if (e.key == "e" && imgmade2 == false) {
      snare2.play();
      x = createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Inside_the_Batad_rice_terraces.jpg/220px-Inside_the_Batad_rice_terraces.jpg');
      imgmade2 = true
      // var x = createElement("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Inside_the_Batad_rice_terraces.jpg/220px-Inside_the_Batad_rice_terraces.jpg");
      // x.setAttribute("width", "304");
      }
    else if (e.key == "d" && imgmade2 == true) {
      snare.play();
      snare2.play();
      x.remove()
      imgmade2 = false
      }

      else if (e.key == "z") {
        snare.play();
        bass.play();
        snare.play();
        yy = createImg('https://media.giphy.com/media/13hxeOYjoTWtK8/giphy.gif')
        images.push(yy)
        console.log(images.length)
        }
        else if (e.key == "x" && yy) {
          kick.play();
          images[0].remove()
          images.splice(0,1)
          console.log(images.length)
          }
else if (e.key == "b"){
  $('#titles').css("display", "none")

}

  })

let images = []

function keyTyped() {

  if (key == "p") {
    bass.play();
    bass.rate(0.9)
  }
  if (key == "l") {
    bass.loop();
    bass.rate(0.5)

  }
  if (key == ",") {
    bass.stop();
  }

  if (key == "o") {
    kick.play();
    $('#title').text("OOOOOOOOO")
    setBgImage("https://media.giphy.com/media/w7mLEAMcpjrpe/giphy.gif")
    $('p').css("transform", "rotate(90)")

  }

  if (key == "e") {
    if(bool == false){
    electricSample.loop();
    electricSample.rate(-0.75)
    bool = true;
  }}
  if(key == "d"){
    if(bool == true){
    electricSample.pause();
    bool = false;
  }}

    if (key == "h") {
      if(bool2 == false){
      homehated.loop();
      homehated.rate(1.25)
      bool2 = true;
      createImg()
    }}
    if(key == "b"){
      if(bool2 == true){
      homehated.pause();
      homehated = false;
    }}
}

let bool = false
let bool2 = false




function drawAudioLine(spectrum,h,r,g,b){
beginShape();
stroke(r,g,b)
for (i = 0; i < spectrum.length; i++) {
  vertex(i, map(spectrum[i], 0, 400, h, 0));
}
endShape();

}



function getLevels(input){
    let level = input.getLevel();
    let size = map(level, 0, 1, 0, 200);
    return size;
}




function drawLines() {

    // background(200)
    numInsts = 6

    // background(140,180,244)

    let sizeK = getLevels(ampKick) * 10
    let sizeS = getLevels(ampSnare)* 10
    let sizeS2 = getLevels(ampSnare2)* 10
    let sizeB = getLevels(ampbass)* 10
    let sizeE = getLevels(ampEsample)* 10

    let spectrumK = fftK.analyze();
    let spectrumS = fftS.analyze();
    let spectrumS2 = fftS2.analyze();
    let spectrumB = fftB.analyze();
    let spectrumE = fftE.analyze();

  push()
  // translate(300,-300)
    noFill()
    strokeWeight(4)
    drawAudioLine(spectrumK,100,100,240,190)
    ellipse(width / numInsts, height - sizeK, sizeK)
    drawAudioLine(spectrumS,200,250,140,190)
    ellipse((width / numInsts) * 2, height - sizeS, sizeS, sizeS)
    drawAudioLine(spectrumS2,300,200,240,140)
    ellipse((width / numInsts) * 3, height - sizeS2, sizeS2, sizeS2)
    drawAudioLine(spectrumB,400,250,240,100)
    ellipse((width / numInsts) * 4, height - sizeB, sizeB, sizeB)
    drawAudioLine(spectrumE,500,250,80,250)
    ellipse((width / numInsts) * 5, height - sizeE, sizeE, sizeE)
    pop()

  }

  function loadSounds(){

      homehated = loadSound('samples/homehated_sample.mp3')
      kick = loadSound('samples/kick.mp3');
      snare = loadSound('samples/snare.mp3');
      snare2 = loadSound('samples/snare2.mp3');
      bass = loadSound('samples/bass.mp3');
      electricSample = loadSound('samples/electricSample.mp3')

      kick.setVolume(0.1);
      snare.setVolume(0.1);
      snare2.setVolume(0.1);
      bass.setVolume(0.8);
      electricSample.setVolume(0.1);
      homehated.setVolume(0.1)

      fftK = new p5.FFT();
      fftK.setInput(kick);
      fftS = new p5.FFT();
      fftS.setInput(snare);
      fftS2 = new p5.FFT();
      fftS2.setInput(snare2);
      fftB = new p5.FFT();
      fftB.setInput(bass);
      fftE = new p5.FFT();
      fftE.setInput(electricSample);

      let smoothing = 0.5

      ampKick = new p5.Amplitude(smoothing);
      ampKick.setInput(kick);
      ampSnare = new p5.Amplitude(smoothing);
      ampSnare.setInput(snare);
      ampSnare2 = new p5.Amplitude(smoothing);
      ampSnare2.setInput(snare2);
      ampbass = new p5.Amplitude(0.8);
      ampbass.setInput(bass);
      ampEsample = new p5.Amplitude(0.3);
      ampEsample.setInput(electricSample);
  }


  let capitalDict = ["A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"]
