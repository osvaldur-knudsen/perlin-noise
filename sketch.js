let noiseScale = 0.001;
let yoff = 0;
let numRivers = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255); // white background

  yoff += 0.01; // increment yoff

  for (let n = 0; n < numRivers; n++) {
    let riverColor = map(n, 0, numRivers, 0, 255); 
    let riverSize = map(n, 0, numRivers, 2, 10);
    for (let x = 0; x < width; x++) {
      let noiseValue = noise(x * noiseScale, (n * 100 + yoff) * noiseScale);
      let y = map(noiseValue, 0, 1, 0, height);
      stroke(0, riverColor, 255);
      strokeWeight(riverSize);
      line(x, y, x + 1, y);
    }
  }
}
