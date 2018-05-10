var loadingImages = true;
var imageIndex = 0;
    
do {
      
  var url = "https://cdn.cornhubs.gq/images/cornhubs_home_" + this.imageIndex + ".jpg";
        
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  
  if (http.status != 404)
    document.getElementById("center").innerHTML += "<img src=\"" + url + "\" alt=\"corn\"></br>";
  else
    break;
        
  imageIndex++;
      
} while (loadingImages);
