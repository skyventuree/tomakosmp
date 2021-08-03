
window.addEventListener('load', function () {
    document.getElementById("defaultOpen").click();
})

var serverStatus = new XMLHttpRequest();
serverStatus.open('GET', 'https://api.mcsrvstat.us/2/tomakosmp.ddns.net', true);
serverStatus.onload = function (e) {
    const resp = JSON.parse(serverStatus.response);
    if (resp.online == true)  document.getElementById("visitor-action").style.display = "initial";
    else document.getElementById("is-offline").style.display = "initial";
};

serverStatus.send();

function platform(evt, platformName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(platformName).style.display = "block";
    evt.currentTarget.className += " active";
}
