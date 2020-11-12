window.addEventListener("load", () => {
    document.getElementById("dictionaryRequest").addEventListener("submit", function(event) {
        event.preventDefault();
        dictionaryGet();
    });
    
});


function dictionaryGet() {
    let xhttp = new XMLHttpRequest();

    let requestedWord = document.getElementById("word").value;
    xhttp.open("GET", `https://lit-reef-66322.herokuapp.com/api/dictionary/${requestedWord}`, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(requestedWord));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let responseJson = JSON.parse(this.responseText);
            document.getElementById("defLabel").innerHTML = `Definition of ${responseJson.word}:` 
            document.getElementById("definition").innerHTML = responseJson.definition;
        }
        if (this.readyState == 4 && this.status != 200) {
            console.log(this.responseText);
        }
    };
}