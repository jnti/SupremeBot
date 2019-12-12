var http = new XMLHttpRequest();

document.getElementById("add").addEventListener("click", function () {
    var url = "https://www.supremenewyork.com/shop/" + itemName.id + "/add.json";
    var params = "s=" + itemSize.id + "&st=" + itemStyle.id + "&qty=1";

    http.open('POST', url, true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
            console.log(url + " " + params);
        }
    }
    http.send(params);
})
