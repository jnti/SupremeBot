var request = require('request');
var mobileEndpoint = "https://www.supremenewyork.com/mobile_stock.json";

// doing a simplified http request to parse the products_and_categories
request({
    url: mobileEndpoint,
    json: true
}, function (error, response, body){
    if (!error && response.statusCode == 200){
        var data = body["products_and_categories"].new;
        // using JSON stringify because HTML can't parse Objects like console.log can
        var dataAfterStringify = JSON.stringify(data);
        document.getElementById("space").innerHTML = dataAfterStringify;
    }
})