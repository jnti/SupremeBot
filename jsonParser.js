var request = require('request');
var mobileEndpoint = "https://www.supremenewyork.com/mobile_stock.json";
var ssEndpoint;
var itemName, itemTextValue, itemStyle, itemColorValue, itemSize, itemId, itemStyleId, itemSizeId;

// onClick of the submit button
// doing a simplified http request to parse the products_and_categories
document.getElementById("loadId").addEventListener("click", function () {
    request({
        url: mobileEndpoint,
        json: true
    }, function (error, response, body) {
        // if the request is successful
        if (!error && response.statusCode == 200) {
            // set the variable data to the array of new products_and_categories
            var data = body["products_and_categories"].new;

            // get the text value of the textbox
            itemTextValue = document.getElementById("itemTextBox").value;
            itemColorValue = document.getElementById("itemColorTextBox").value;
            itemSizeValue = document.getElementById("itemSizeTextBox").value;

            // loop through array of json and if the name is equal to the name of text value
            // write the id of the respective item to the page
            for (var i = 0; i < data.length; i++) {
                itemName = data[i];

                if (itemName.name == itemTextValue) {
                    document.getElementById("space1").innerHTML = itemName.id;
                    itemId = itemName.id;

                    // style and size endpoint of the item
                    ssEndpoint = "https://www.supremenewyork.com/shop/" + itemName.id + ".json";

                    /// doing an another request to get the style and size id
                    request({
                        url: ssEndpoint,
                        json: true
                    }, function (error, response, body) {
                        // if the request is successful
                        if (!error && response.statusCode == 200) {
                            // set the variable data to the array of styles
                            var ssData = body["styles"];

                            // outputting the results of the styles request into space3 html element
                            var dataAfterStringify = JSON.stringify(ssData);
                            document.getElementById("space4").innerHTML = dataAfterStringify;

                            // loop through array of json and if the name is equal to the name of text value
                            // write the id of the respective item to the page
                            for (var i = 0; i < ssData.length; i++) {
                                itemStyle = ssData[i];

                                // loop through array of json and if the name is equal to the name of text value
                                // write the id of the respective item to the page
                                for (var j = 0; j < ssData[i].sizes.length; j++) {
                                    itemSize = ssData[i].sizes[j];

                                    // getting the item size id
                                    if (itemSize.name == itemSizeValue) {
                                        document.getElementById("space3").innerHTML = itemSize.id;
                                        itemSizeId = itemSize.id;
                                    }
                                }

                                // getting the item style id
                                if (itemStyle.name == itemColorValue) {
                                    document.getElementById("space2").innerHTML = itemStyle.id;
                                    itemStyleId = itemStyle.id;
                                }
                            }
                        }
                    })
                }
            }
        }
    })
});