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

// calling functions  from the game.js file

function goStore() {
  console.log("Going to store.");
  window.alert("Going to store.");
}

function goCave() {
  console.log("Going to cave.");
  window.alert("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
  window.alert("Fighting dragon.");
}

// initialize buttons  and add event listeners

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
