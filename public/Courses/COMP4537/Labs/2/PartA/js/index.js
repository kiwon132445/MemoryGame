let alphabetArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
window.addEventListener("load", () => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    
    for(let i = 0; i < alphabetArray.length; i++) {
        let button = document.createElement("button");
        button.style.width = "30px";
        button.innerHTML = alphabetArray[i];
        button.addEventListener("click", function() {alert(alphabetArray[i])});
        if (i < 13) {
            div1.append(button);
        } else {
            div2.append(button);
        }
    }
    document.getElementById("button-page").insertBefore(div2, document.body.childNodes[0]);
    document.getElementById("button-page").insertBefore(div1, document.body.childNodes[0]);
});