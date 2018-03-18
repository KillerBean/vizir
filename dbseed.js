const modelPlan = require("./model/Plan")();
const modelPrice = require("./model/Price")();

let newPlans = {"name": ["Fale Mais 30", "Fale Mais 60", "Fale Mais 120"],
"limit": [30,60,120]};
let newPrices = { "origin": [ 11, 16, 11, 17, 11, 18 ], "destiny": [ 16, 11, 17, 11, 18, 11 ],
"price": [ 1.9, 2.9, 1.7, 2.7, 0.9, 1.9 ] };

let plansDump = Object.entries(newPlans);
let pricesDump = Object.entries(newPrices);

let planNames = plansDump[0][1];
let planLimits = plansDump[1][1];

let planOrigins = pricesDump[0][1];
let planDestinies = pricesDump[1][1];
let planPrices = pricesDump[2][1];

console.log("Inserindo informações...");
if(planNames.lenght == planLimits.lenght){
    for (let i = 0; i < planNames.length; i++) {
        modelPlan.findOrCreate({ name: planNames[i], limit: planLimits[i] });
    }
}else{
    console.error("Arrays Incorretas");
}
if(planOrigins.lenght == planDestinies.lenght && planDestinies.lenght == planPrices.lenght){
    for (let i = 0; i < planOrigins.length; i++) {
        modelPrice.findOrCreate({ origin: planOrigins[i], destiny: planDestinies[i], price: planPrices[i] });
    }
}else{
    console.error("Arrays Incorretas");
}
process.exit(0);
