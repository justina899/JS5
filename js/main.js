console.log("Funkcijos");
console.log("1 uzd");
console.log("5 ir 6 sandauga: " + sandauga(5, 6));
function sandauga(num1, num2) {
    return num1 * num2;
}

console.log("2 uzd");
let vardas = "Jonas";
labas(vardas);
function labas(vardas) {
    console.log("labas " + vardas);
}

console.log("3 uzd");
tekstas("abrakadabra");
function tekstas(text) {
    console.log(text.length);
}

console.log("4 uzd");
inicialai("vardas", "pavarde");
function inicialai(v, p) {
    console.log(v.charAt(0).toUpperCase() + p.charAt(0).toUpperCase());
}

console.log("5 uzd");
numToHTML("10000");
function numToHTML(num) {
    document.getElementById("numberPlace").innerText = num;
}
//6 raudonas
console.log("7 uzd");
randNum();
function randNum() {
    let num1 = Math.round(Math.random() * 5);
    let num2 = Math.round(Math.random() * 5);
    let num3 = Math.round(Math.random() * 5);
    console.log("atsitiktiniai skaiciai: " + num1 + ", " + num2 + ", " + num3);
}

console.log("8 uzd");
console.log("random skaicius is intervalo [2, 9]: " + randNumFromRange(2, 9));
function randNumFromRange(from, to) {
    return (Math.round(Math.random() * (to - from)) + from);
}

console.log("9 uzd");
kurtiP();
function kurtiP() {
    let HTML = "";
    for (let i = 0; i < 10; i++) {
        HTML += "<p>" + (i + 1).toString() + "</p>";
    }
    document.getElementById("sequence").innerHTML = HTML;
    console.log("tagai sukurti");
}

console.log("VIDUTINIAI");
console.log("1 uzd");
console.log(pakeltiLaipsniu (5, 14));
function pakeltiLaipsniu(skaicius, laipsnis) {
    if(laipsnis == 0){
        return 1;
    }

    let rezultatas = skaicius;

    for (let i = 1; i < laipsnis; i++) {
            rezultatas *= skaicius;
    }

    return rezultatas;
}

console.log("2 uzd");
rezGrazinaIHTML(2, 3, "zuikis");
console.log("done");
function rezGrazinaIHTML(sk, laip, htmlId){
    rez = pakeltiLaipsniu(sk, laip);
    let HTML = "";
    HTML += "<p>" + "rezultatas: " + rez.toString() + "</p>";
    document.getElementById(htmlId).innerHTML = HTML;
}

console.log("SUNKESNI");
console.log("1 uzd");

