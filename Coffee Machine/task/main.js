// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

const cupsSizeM = 9;
const cupsSizeL = 5;

let water = 400;
let milk = 100;
let coffeeBeans = 120;
let money = 550;
let cups = [cupsSizeM, cupsSizeL];

let espresso = {water: 250, milk: 0, coffeeBeans: 16, cost: 4};
let latte = {water: 350, milk: 75, coffeeBeans: 20, cost: 7};
let cappuccino = {water: 200, milk: 100, coffeeBeans: 12, cost: 6};
let coffees = [espresso, latte, cappuccino];


function writeAction() {
    console.log(`Write action (buy, fill, take, remaining, exit):`);
    return input();
}

function remaining() {
    console.log(`The coffee machine has:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans`);
    console.log(`${cups[0]} disposable cups`);
    console.log(`${cups[1]} disposable cups`);
    console.log(`$${money} of money`);
}

function buy() {
    let sizeCoffee = 1;
    console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`);
    let typeOfCoffee = input();
    if (typeOfCoffee === "back") {
        console.log();
        return;
    }
    console.log(`What size coffee do you want? 1 - medium, 2 - large:`);
    let size = Number(input());
    if (size === 2) {
        sizeCoffee = 1.5;
    }
    let coffee = coffees[Number(typeOfCoffee) -1 ];
    if (checkIngredients(coffee, sizeCoffee, cups[size - 1])) {
        console.log(`I have enough resources, making you a coffee!`);
        water -= sizeCoffee * coffee.water;
        milk -= sizeCoffee * coffee.milk;
        coffeeBeans -= sizeCoffee * coffee.coffeeBeans;
        cups[size - 1] --;
        money += sizeCoffee * coffee.cost;
    }
}

function checkIngredients(coffee, size, cups) {
    let result = true;
    let notEnoughIngredients = [];
    if (size * coffee.water > water) {
        notEnoughIngredients.push(`water`);
        result = false;
    }
    if (size * coffee.milk > milk) {
        notEnoughIngredients.push(`milk`);
        result = false;
    }
    if (size * coffee.coffeeBeans > coffeeBeans) {
        notEnoughIngredients.push(`coffee beans`);
        result = false;
    }
    if (cups - 1 < 0) {
        notEnoughIngredients.push(`cups`);
        result = false;
    }
    if (result === false){
        console.log(`Sorry, not enough ${notEnoughIngredients.join(" and ")}`);
    }
    return result;
}

function fill() {
    console.log(`Write how many ml of water you want to add:`);
    let addWater = Number(input());
    console.log(`Write how many ml of milk you want to add:`);
    let addMilk = Number(input());
    console.log(`Write how many grams of coffee beans you want to add:`);
    let addCoffeeBeans = Number(input());
    console.log(`Write how many medium disposable coffee cups you want to add:`);
    let addCupsM = Number(input());
    console.log(`Write how many large disposable coffee cups you want to add:`);
    let addCupsL = Number(input());
    water += addWater;
    milk += addMilk;
    coffeeBeans += addCoffeeBeans;
    cups[0] += addCupsM;
    cups[1] += addCupsL;
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
