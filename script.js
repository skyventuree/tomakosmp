var serverStatus = new XMLHttpRequest();
serverStatus.open('GET', 'https://api.mcsrvstat.us/2/tomakosmp.ddns.net', true);



serverStatus.onload = function (e) {
    const resp = JSON.parse(serverStatus.response);
    if (resp.online == true)  document.getElementById("visitor-action").style.display = "initial";
    else document.getElementById("is-offline").style.display = "initial";
};

serverStatus.send();