//different ways of saying pet
let animals = [{
  name: "dearest"
}, {
  name: "loved"
}, {
  name: "pets"
}, {
  name: "precious"
}, {
  name: "friends"
}, {
  name: "companion"
}, {
  name: "fur ball"
}];
//different adjectives
let adj = [{
  describe: "happy"
}, {
  describe: "loyal"
}, {
  describe: "go lucky"
}, {
  describe: "cute"
}, {
  describe: "fluffy"
}, {
  describe: "adorable"
}];


let randomIndex
let randomAdjective

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(20);
  push()
  textSize(15)
  textAlign(CENTER);
  text("click to generate a company cover name ", 200, 200);
  textAlign(CENTER);
  text("with a color theme", 200, 220);
  pop()


}



function draw() {

};






function mousePressed() {
  background(random(255) + 10, random(255) + 10, random(255) + 10);
  randomIndex = int(random(animals.length))
  randomAdjective = int(random(adj.length))
  wrd();
  //    animals.splice(randomIndex, 1);
}

function wrd() {
  text(adj[randomAdjective].describe + ' ' + animals[randomIndex].name, 200, 200);
}
