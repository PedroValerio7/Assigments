/*var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function


var pizza1 = {
    "crustType": "deep dishes",
    "sauceType": "traditional",
    "cheeses": ["mozzarella"],
    "toppings": ["pepperoni", "sausage"],
    "pizzaInfo": function() {
        console.log("")

    }
}
*/
/*
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
*/
/* Pizza 1
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepporoni", "sausage"]);
console.log(p1);
*/
/* Pizza 2
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
*/
/* Pizza with any topping 1
var hawaiianPizza = pizzaOven("hand tossed", "traditional", "mozzarella", ["pineapple", "ham", "mushrooms", "olives"]);
console.log(hawaiianPizza);
// pizza with any topping 2
var meatLovers = pizzaOven("deep dish", "marinara", "feta", ["pepporoni", "sausage", "mushrooms", "bacon"]);
console.log(meatLovers);
*/
// Random Pizza
function randomPizza() {
    var pizza = {};
    var crustType = ["thin", "stuff", "Flat", "thick"];
    var sauceType = ["marinara", "traditional", "spicy red"];
    var cheeses = ["Feta", "Mozzarella", "cheddar"];
    var toppings = ["Pepporoni", "sausage", "mushrooms"];
    pizza.crustType = crustType[Math.floor(Math.random()*crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random()*sauceType.length)];
    pizza.cheeses =  cheeses[Math.floor(Math.random()*cheeses.length)];
    pizza.toppings =toppings[Math.floor(Math.random()*toppings.length)];
    console.log(pizza);
}
randomPizza();

