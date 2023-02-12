let noiseScale = 0.01;
let yoff = 0;
let numRivers = 25;
let rivers = []; // array to store all the rivers
let allRivers = []; // array to store all the rivers

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  // set to hsb color mode
  colorMode(HSB, 255);
  // create an array of 3 colors that we will use to draw the river
  // that only vary in hue
  colors = [0, 60, 120];
  // create a river object for each iteration
  for (let n = 0; n < numRivers; n++) {
    let riverColor = colors[floor(random(colors.length))];
    let riverSize = map(n, 0, numRivers, 1, 4);
    let river = {
      color: riverColor,
      size: riverSize
    };
    rivers.push(river);
    allRivers.push(river);
  }
  noLoop();
}

function draw() {
  background(255); // white background
  yoff += 0.01; // increment yoff
  // iterate through the colors array
  // and draw the rivers of the same color
  for (let i = 0; i < colors.length; i++) {
    drawRivers(colors[i]);
  }

  // iterate through the colors array
  // and draw the rivers of the same color
  for (let i = 0; i < colors.length; i++) {
    drawAllRivers(colors[i]);
  }
}

// function to draw rivers of the same color
// and save the svg file
function drawRivers(color) {
  for (let i = rivers.length - 1; i >= 0; i--) {
    let river = rivers[i];
    if (river.color === color) {
      stroke(river.color, 255, 255);
      strokeWeight(river.size);
      for (let x = 0; x < width; x++) {
        let noiseValue = noise(x * noiseScale, (i * 100 + yoff) * noiseScale);
        let y = map(noiseValue, 0, 1, 0, height);
        line(x, y, x + 1, y);
      }
      // remove the river from the array
      rivers.splice(i, 1);
    }
  }
  // save the svg for each color
  // save("river_" + color + ".svg");
  
  // clear the canvas
  clear();
}

// function to similar to drawRivers except that it
// uses the allRivers array instead of the rivers array
// and it takes the color as an argument
function drawAllRivers(color) {
  for (let i = allRivers.length - 1; i >= 0; i--) {
    let river = allRivers[i];
    if (river.color === color) {
      stroke(river.color, 255, 255);
      strokeWeight(river.size);
      for (let x = 0; x < width; x++) {
        let noiseValue = noise(x * noiseScale, (i * 100 + yoff) * noiseScale);
        let y = map(noiseValue, 0, 1, 0, height);
        line(x, y, x + 1, y);
      }
      // remove the river from the array
      allRivers.splice(i, 1);
    }
  }
}
