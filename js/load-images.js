imageIndex = 0;

let http = new XMLHttpRequest();

do {
    let url = "https://cdn.cornhubs.savageavocado.net/images/cornhubs_home_" + imageIndex + ".jpg";

    http.open('GET', url, false);
    http.send();

    if (http.status !== 404) {
        document.getElementById("center").innerHTML += "<img src=\"" + url + "\" alt=\"corn\" style=\"padding-top: 20px; display: block; margin: auto; width: 40%;\" /><br>";
    }

    imageIndex++;
} while (http.status !== 404);


do {
    let url = "https://cdn.cornhubs.savageavocado.net/images/cornhubs_home_" + imageIndex + ".gif";

    http.open('GET', url, false);
    http.send();

    if (http.status !== 404) {
        document.getElementById("center").innerHTML += "<img src=\"" + url + "\" alt=\"corn\" style=\"padding-top: 20px; display: block; margin: auto; width: 40%;\" /><br>";
    }

    imageIndex++;
} while (http.status !== 404);
