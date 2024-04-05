console.log(
  "***---------------------------***\nWelcome to my first js web project\nfrom freeCodeCamp.\n***---------------------------***"
);

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let monsterHealth = 100;

let fighting;
let inventory = ["stick"];

let len;
len = inventory.length;
console.log(`Inventory Length: ${len}`);
console.log(inventory);

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
const monsterHealthText = document.querySelector("#monsterHealthText");

let mHealth = parseInt(monsterHealthText.innerText);

// initialize buttons  and add event listeners
button1.onclick = goStore;
button2.onclick = goCave;

if (len == 0) {
  text.innerText = "No weapons! Go to store.";
} else {
  button3.onclick = fightDragon;
}

// calling functions  from the game.js file

function getDragonDamage() {
  let max = 10;
  let randomNum = Math.floor(Math.random() * max);
  let num = randomNum * 10;

  return num % 2 === 0 ? num : num * 10;
}

function getPlayerDamage() {
  let max = 10;
  let randomNum = Math.floor(Math.random() * max);
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
  gold = parseInt(goldText.innerText);
  health = parseInt(healthText.innerText);
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    text.innerText = "Bought health.";
    console.log("Bought health.");
  } else {
    text.innerText = "You don't have enough gold!";
  }
}

function buyWeapon() {
  gold = parseInt(goldText.innerText);
  if (gold >= 30) {
    gold -= 30;
    inventory.push("stick");
    goldText.innerText = gold;
    text.innerText = "Bought weapon.";
    console.log("Bought weapon.");
  } else {
    text.innerText = "You don't have enough gold!";
  }

  len = inventory.length;
  console.log(`Inventory Length: ${len}`);
  console.log(inventory);
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
  if (mHealth <= 0) {
    monsterHealth = 100;
    monsterHealthText.innerText = 100;
  } else {
    let dragonDamage = getDragonDamage();
    let playerDamage = getPlayerDamage();
    console.log(`Dragon Damage: ${dragonDamage}`);
    console.log(`Player Damage: ${playerDamage}`);

    monsterStats.style.display = "flex";
    monsterHealth = monsterHealthText.innerText;
    health = healthText.innerText;
    if (playerDamage <= monsterHealth) {
      monsterHealth -= playerDamage;
      monsterHealthText.innerText = monsterHealth;
      console.log("Fighting dragon.");
      text.innerText = "Fighting dragon.";
    } else {
      monsterHealthText.innerText = 0;
      monsterHealth = 0;
      gold += 50;
      xp += 5;
      xpText.innerText = xp;
      goldText.innerText = gold;
      console.log("You defeated the dragon.");
      text.innerText = "You defeated the dragon.";
    }

    if (dragonDamage <= health) {
      health -= dragonDamage;
      healthText.innerText = health;
      xp += 3;
      xpText.innerText = xp;
    } else {
      healthText.innerText = 0;
      health = 0;
      xp += 1;
      xpText.innerText = xp;
      console.log("You were defeated by the dragon.");
      text.innerText = "You were defeated by the dragon.";

      inventory.pop();
      len = inventory.length;
      console.log(`Inventory Length: ${len}`);
      console.log(inventory);
    }

    // if (monsterHealth <= 0) {
    //   console.log("You defeated the dragon.");
    //   text.innerText = "You defeated the dragon.";
    // } else if (health <= 0) {
    //   console.log("You were defeated by the dragon.");
    //   text.innerText = "You were defeated by the dragon.";
    // } else {
    //   console.log(
    //     "You defeated the dragon and unfortunately you lost your life."
    //   );
    //   text.innerText =
    //     "You defeated the dragon and unfortunately you lost your life.";
    // }
  }
}
