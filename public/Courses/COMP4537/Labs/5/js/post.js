window.addEventListener("load", () => {
    document.getElementById("dictionaryAddition").addEventListener("submit", function(event) {
        event.preventDefault();
        dictionaryPost();
    });
    
});

function dictionaryPost() {
    let xhttp = new XMLHttpRequest();

    let newWord = {
        "word":document.getElementById("word").value,
        "definition":document.getElementById("definition").value
    }
    console.log(newWord)
    xhttp.open("POST", "https://lit-reef-66322.herokuapp.com/api/dictionary/", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(newWord));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.body.innerHTML += " Submit successful"
        }
        if (this.readyState == 4 && this.status != 200) {
            console.log(this.responseText);
        }
    };
}