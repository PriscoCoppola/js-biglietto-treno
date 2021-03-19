// Biglietto Treno

// 1. Chiedere all'utente numero di km da percorrere
// 2. Chiedere all'utente l'età
// 3. Calcolare il prezzo del biglietto in base ai (0,21€ al km)
// 4. Calcolare il prezzo del biglietto con uno sconto del 20% per passeggeri minorenni
// 5. Calcolare il prezzo del biglietto con uno sconto del 40% per passeggeri over 65
// 6. If e else
// 7. Output (con massimo 2 decimali)

// 1. Chiedere all'utente numero di km da percorrere
var numberKm = parseInt( prompt('Quanti KM devi percorrere?') );
if(isNaN(numberKm)) {
    alert('Devi inserire un numero. Verranno inseriti 100km');
    numberKm = 100;
}

// 2. Chiedere all'utente l'età
var age = prompt('Quanti anni hai?');
if(isNaN(age)) {
    alert('Devi inserire un numero. Verranno inseriti anni 50 e pagherai il biglietto a prezzo pieno');
    age = 50;
}

// 3. Calcolare il prezzo del biglietto in base ai (0,21€ al km)
var priceKm = 0.21;
var price = numberKm * priceKm;

// 4. Calcolare il prezzo del biglietto con uno sconto del 20% per passeggeri minorenni
var price20 = (20 / 100) * price; // Sconto del 20%
var priceMin = price - price20;

// 5. Calcolare il prezzo del biglietto con uno sconto del 40% per passeggeri over 65
var price40 = (40 / 100) * price; // Sconto del 40%
var priceOv = price - price40;

// 6. If e else
if(age <= 18) {
    document.getElementById('km').innerHTML = ('TARIFFA MINORENNI ' + price.toFixed(2) + '€');
} else if(age > 18 && age < 65) {
    document.getElementById('km').innerHTML = ('TARIFFA INTERA ' + priceMin.toFixed(2) + '€');
} else {
    document.getElementById('km').innerHTML = ('TARIFFA ANZIANI ' + priceOv.toFixed(2) + '€');
}

