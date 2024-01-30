function includeHTML(filename, targetElementId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById(targetElementId).innerHTML = this.responseText;
      }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}