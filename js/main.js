let KM = prompt ("Km da percorrere");
let Age = prompt ("Età Passeggero");
let Prezzo = KM * 0.21;



if (Age <= 18){
    let ScontoBambini = Prezzo * 20 / 100;
    let PrezzoScontato1 = Prezzo - ScontoBambini;
    console.log(PrezzoScontato1 + "€");}
else if(Age >= 65){
    let ScontoAnziani = Prezzo * 40 / 100;
    let PrezzoScontato2 = Prezzo - ScontoAnziani;
    console.log(PrezzoScontato2 + "€");}
else {
    console.log(Prezzo + "€");}