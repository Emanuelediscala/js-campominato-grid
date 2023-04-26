// DICHIARAZIONE VARIABILE
const griglia = document.getElementById("grid");
const PushdButton = document.getElementById("play");




// DICHIARAZIONE FUNZIONE TASTO BUTTON
PushdButton.addEventListener("click", function() {
        griglia.innerHTML = "";
// DIFFICULT SELECTION
const Difficult = document.getElementById("Options").value;
console.log(Difficult);
if (Difficult == "Easy") {
    Generablocchi(49)
}
else if (Difficult == "Medium") {
    Generablocchi(81) 
} 
else if  (Difficult == "HardMode") {
    Generablocchi(100) 
}
})        

// GENERA BLOCCHI DEFAULT
function Generablocchi(Selection) {
for (let i = 1; i <= Selection; i++) {
let Nuovoblocco = document.createElement("div");    
Nuovoblocco.classList.add("square");
if (Selection == 49) {
    Nuovoblocco.style.width = "calc(100% / 7)"
}
else if (Selection == 81) {
    Nuovoblocco.style.width = "calc(100% / 9)"
}
else if (Selection == 100) {
    Nuovoblocco.style.width = "calc(100% / 10)"

}
griglia.appendChild(Nuovoblocco);
Nuovoblocco.innerHTML = [i];
Nuovoblocco.addEventListener("click", function() {
this.classList.toggle("clicked");    
let BlockValue = Nuovoblocco.innerHTML;
console.log(BlockValue);
})
}
}


