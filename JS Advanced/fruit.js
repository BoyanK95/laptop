function fruit(type, weightInGrams, price) {
    let weightInKg = weightInGrams / 1000;
    let total = weightInKg * price;
    console.log(`I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)
}

fruit('orange', 2500, 1.80)