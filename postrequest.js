var http = new XMLHttpRequest();
var url = "https://www.supremenewyork.com/shop/" + itemName.id + "/add.json";
var params = "";

http.open('POST', url, true);

http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}

http.send(params);