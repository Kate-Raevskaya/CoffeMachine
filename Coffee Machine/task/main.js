// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let water = 400;
let milk = 540;
let coffeeBeans = 120;
let cups = 9;
let money = 550;

let espresso = {water: 250, milk: 0, coffeeBeans: 16, cost: 4};
let latte = {water: 350, milk: 75, coffeeBeans: 20, cost: 7};
let cappuccino = {water: 200, milk: 100, coffeeBeans: 12, cost: 6};

function writeAction() {
    console.log(`Write action (buy, fill, take, remaining, exit):`);
    return input();
}

function remaining() {
    console.log(`The coffee machine has:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
}

function buy() {
    console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`);
    let typeOfCoffee = input();
    if (typeOfCoffee === "back") {
        console.log();
        return;
    }
    typeOfCoffee = Number(typeOfCoffee);
    let needWater;
    let needMilk;
    let needCoffeeBeans;
    let costOfCoffee;
    switch (typeOfCoffee) {
        case 1:
            needWater = 250;
            needMilk = 0;
            needCoffeeBeans = 16;
            costOfCoffee = 4;
            break;
        case 2:
            needWater = 350;
            needMilk = 75;
            needCoffeeBeans = 20;
            costOfCoffee = 7;
            break;
        case 3:
            needWater = 200;
            needMilk = 100;
            needCoffeeBeans = 12;
            costOfCoffee = 6;
            break;
    }
    let restWater = water - needWater;
    let restMilk = milk - needMilk;
    let restCoffeeBeans = coffeeBeans - needCoffeeBeans;
    let restCups = cups - 1;
    if (restWater < 0) {
        console.log(`Sorry, not enough water`);
    } else if (restMilk < 0) {
        console.log(`Sorry, not enough milk`);
    } else if (restCoffeeBeans < 0) {
        console.log(`Sorry, not enough coffee beans`);
    } else if (restCups < 0) {
        console.log(`Sorry, not enough cups`);
    } else {
        console.log(`I have enough resources, making you a coffee!`);
        water = restWater;
        milk = restMilk;
        coffeeBeans = restCoffeeBeans;
        cups = restCups;
        money += costOfCoffee;
    }
}

function fill() {
    console.log(`Write how many ml of water you want to add:`);
    let addWater = Number(input());
    console.log(`Write how many ml of milk you want to add:`);
    let addMilk = Number(input());
    console.log(`Write how many grams of coffee beans you want to add:`);
    let addCoffeeBeans = Number(input());
    console.log(`Write how many disposable coffee cups you want to add:`);
    let addCups = Number(input());
    water += addWater;
    milk += addMilk;
    coffeeBeans += addCoffeeBeans;
    cups += addCups;
}

function take() {
    console.log(`I gave you $${money}`);
    money = 0;
}

function main () {
    let action;
    do {
        action = writeAction();
        console.log();
        if (action === "buy") {
            buy();
        } else if (action === "fill") {
            fill();
        } else if (action === "take") {
            take();
        } else if (action === "remaining") {
            remaining();
        }
        console.log();
    } while (action !== "exit");
}

main();
