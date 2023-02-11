let noiseScale = 0.001;
let yoff = 0;
let numRivers = 20;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  // set to hsb color mode
  colorMode(HSB, 255);
  // create an array of 3 colors that we will use to draw the river
  // that only vary in hue
  colors = [0, 60, 120];
  noLoop();

}

function draw() {
  
  background(255); // white background
  yoff += 0.01; // increment yoff
  for (let n = 0; n < numRivers; n++) {
    // select color randomly from the array
    let riverColor = colors[floor(random(colors.length))];
    let riverSize = map(n, 0, numRivers, 2, 10);
    for (let x = 0; x < width; x++) {
      let noiseValue = noise(x * noiseScale, (n * 100 + yoff) * noiseScale);
      let y = map(noiseValue, 0, 1, 0, height);
      stroke(riverColor, 255, 255);
      strokeWeight(riverSize);
      line(x, y, x + 1, y);
    }
  }

  // save the svg
  save("river.svg");

}
