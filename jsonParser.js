var request = require('request');
var mobileEndpoint = "https://www.supremenewyork.com/mobile_stock.json";
var itemName, itemTextValue;

// onClick of the submit button
// doing a simplified http request to parse the products_and_categories
document.getElementById("submit").addEventListener("click", function () {
    request({
        url: mobileEndpoint,
        json: true
    }, function (error, response, body) {
        // if the research is successful
        if (!error && response.statusCode == 200) {
            // set the variable data to the array of new products_and_categories
            var data = body["products_and_categories"].new;
            // get the text value of the textbox
            itemTextValue = document.getElementById("itemTextBox").value;

            // loop through array of json and if the name is equal to the name of text value
            // write the id of the respective item to the page
            for (var i = 0; i < data.length; i++){
                itemName = data[i];
                if (itemName.name == itemTextValue){
                    document.getElementById("space").innerHTML = itemName.id;
                }
            }
        }
    })
});

// get the style and size id from https://www.supremenewyork.com/shop/<id>.json