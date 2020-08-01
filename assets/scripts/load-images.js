let http = new XMLHttpRequest();
let imageIndex = 0;

do {
    let url = "../images/home_" + imageIndex + ".jpg";

    http.open('GET', url, false);
    http.send();

    if (http.status !== 404) {
        document.getElementById("center").innerHTML += "<img src=\"" + url + "\" alt=\"corn " + imageIndex + "\" style=\"padding-top: 20px; display: block; margin: auto; width: 40%;\" /><br>";
    }

    imageIndex++;
} while (http.status !== 404);
