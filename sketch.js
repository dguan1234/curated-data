//animals that we consume
let animals = [{
  name: "cows"
}, {
  name: "pigs"
}, {
  name: "chicken"
}, {
  name: "fish"
}, {
  name: "crab"
}, {
  name: "squid"
}, {
  name: "lobster"
}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(20);
  push()
  textSize(10)
  text("Our servings to you in order", 200, 200);
  pop()


}

function draw() {


}

function mousePressed() {
  if (animals[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(animals.length))
    text(animals[randomIndex].name, 200, 200);
    animals.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    text("enjoy", 200, 200);
  }
}
