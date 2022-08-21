// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");

function howCups() {
    console.log("Write how many cups of coffee you will need:");
    let cups = Number(input());
    return cups;
}

// function calculation(cups) {
//     let water = cups * 200;
//     let milk = cups * 50;
//     let coffeeBeans = cups * 15;
//     console.log(`For ${cups} cups of coffee you will need:`);
//     console.log(`${water} ml of water`);
//     console.log(`${milk} ml of milk`);
//     console.log(`${coffeeBeans} g coffee beans`);
// }

function howIngredients(ingredient) {
    let unit;
    if (ingredient === "water" || ingredient === "milk") {
        unit = "ml";
    } else {
        unit = "grams";
    }
    console.log(`Write how many ${unit} of ${ingredient} the coffee machine has:`);
    let ing = input();
    return ing;
}

function cupsCalculation(water, milk, coffeeBeans, cups) {
    let w = Math.floor(water / 200);
    let m = Math.floor(milk / 50);
    let b = Math.floor(coffeeBeans / 15);
    let arr = [w, m, b];
    arr.sort((x, y) => x - y);
    let maxCups = arr[0];
    let restCups = maxCups - cups;
    if (restCups > 0) {
        console.log(`Yes, I can make that amount of coffee (and even ${restCups} more than that)`);
    } else if (restCups < 0) {
        console.log(`No, I can make only ${maxCups} cups of coffee`);
    } else if (restCups === 0) {
        console.log(`Yes, I can make that amount of coffee`);
    }
}


let water = howIngredients("water");
let milk = howIngredients("milk");
let coffeeBeans = howIngredients("coffee beans");
let cups = howCups();
cupsCalculation(water, milk, coffeeBeans, cups);
//calculation(cups);
