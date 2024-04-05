console.log("Welcome to my first js web project\nfrom freeCodeCamp.");

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let monsterHealth;

let fighting;
let inventory = ["stick"];

// storing selectors in a variable for easy access later on
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons  and add event listeners
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// calling functions  from the game.js file

function getRandomEvenNo() {
  let max = 10;
  let randomNum = Math.floor(Math.round() * max);
  let num = randomNum * 10;

  return num % 2 === 0 ? num : num * 10;
}

function goStore() {
  text.innerText = "Going to store.";
  console.log("Going to store.");
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";

  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;

  monsterStats.style.display = "none";
}

function buyHealth() {
  text.innerText = "Bought health.";
  console.log("Bought health.");
}

function buyWeapon() {
  text.innerText = "Bought weapon.";
  console.log("Bought weapon.");
}

function goTown() {
  text.innerText = "Going to town.";
  console.log("Going to town.");
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
}

function goCave() {
  console.log("Going to cave.");
  text.innerText = "Going to cave.";
}

function fightDragon() {
  monsterStats.style.display = "flex";
  console.log("Fighting dragon.");
  text.innerText = "Fighting dragon.";
}

let n = getRandomEvenNo();
console.log(n);
