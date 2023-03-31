




function search() {
    var server = new XMLHttpRequest();
    server.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("cheak").innerHTML = this.responseText;
        }
    }

    server.open("GET", "Demo2.txt", true);
    server.send();
}


function clickload(){

    
    let server = new XMLHttpRequest();
    
    server.onreadystatechange = function () {
        // if (this.readyState == 4 && this.status == 200) {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("cheak").innerHTML = this.responseText;
        }
    
    }
    server.open('GET', 'Demo.txt',true),
        server.send()
}

















