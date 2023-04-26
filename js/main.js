// DICHIARAZIONE VARIABILE
const griglia = document.getElementById("grid");
const PushdButton = document.getElementById("play");


PushdButton.addEventListener("click", function() {
        griglia.innerHTML = "";
        for (let i = 1; i <= 64; i++) {
        let Nuovoblocco = document.createElement("div");
        Nuovoblocco.classList.add("square");
        griglia.appendChild(Nuovoblocco);
        Nuovoblocco.innerHTML = [i];
        Nuovoblocco.addEventListener("click", function() {
        this.classList.toggle("clicked");
        let BlockValue = Nuovoblocco.innerHTML;
        console.log(BlockValue);
    })    
}
})


