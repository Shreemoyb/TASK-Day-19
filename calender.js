function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var url = "https://holidays.abstractapi.com/v1/?api_key=9fc03a9058c2498bb6af8ea6bd03363d&country=US&year=2020&month=12&day=25"

httpGetAsync(url)