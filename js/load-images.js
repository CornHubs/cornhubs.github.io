var loadingImages = true;
var imageIndex = 0;
    
do {
      
  var url = "https://cdn.cornhubs.gq/images/cornhubs_home_" + this.imageIndex + ".jpg";
        
  var http = new XMLHttpRequest();
  http.open('GET', url, true);
  http.send();
  
  if (http.status != 404)
    document.getElementById("center").innerHTML += "<img src=\"" + url + "\" alt=\"corn\" style=\"padding-top: 20px; display: block; margin: auto; width: 40%;\"></br>";
  else
    break;
        
  imageIndex++;
      
} while (loadingImages);
