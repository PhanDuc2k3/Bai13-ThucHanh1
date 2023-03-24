var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
var is_shop_open = true;
var order = function (time, work) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(function () {
                // work is getting done here
                resolve(work());
                // Setting time here for 1 work
            }, time);
        }
        else {
            reject(console.log("Our shop is closed"));
        }
    });
};
// step 1
order(2000, function () { return console.log("".concat(stocks.Fruits[0], " was selected")); })
    // step 2
    .then(function () {
    return order(0, function () { return console.log('production has started'); });
})
    // step 3
    .then(function () {
    return order(2000, function () { return console.log("Fruit has been chopped"); });
})
    // step 4
    .then(function () {
    return order(1000, function () { return console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " added")); });
})
    // step 5
    .then(function () {
    return order(1000, function () { return console.log("start the machine"); });
})
    // step 6
    .then(function () {
    return order(2000, function () { return console.log("ice cream placed on ".concat(stocks.holder[1])); });
})
    // step 7
    .then(function () {
    return order(3000, function () { return console.log("".concat(stocks.toppings[0], " as toppings")); });
})
    // Step 8
    .then(function () {
    return order(2000, function () { return console.log("Serve Ice Cream"); });
});
