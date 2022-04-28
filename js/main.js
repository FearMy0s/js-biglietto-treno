let KM = prompt ("Km da percorrere");
let Age = prompt ("Età Passeggero");
let Prezzo = KM * 0.21;
let ScontoAnziani = Prezzo * 40 / 100;
let ScontoBambini = Prezzo * 20 / 100;
let PrezzoScontato1 = Prezzo - ScontoBambini;
let PrezzoScontato2 = Prezzo - ScontoAnziani;
if (Age <= 18){ PrezzoScontato1;console.log(PrezzoScontato1);}
else if(Age >= 65){ScontoAnziani;console.log(PrezzoScontato2);}
else {
    console.log(Prezzo)
}