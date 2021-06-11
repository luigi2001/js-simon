var numeri = [];

var numeriUtente = [];
        
var esito = [];

var numeroUtente;

for(var i = 0; i < 5; i++){
    var numeriCasuali = numeriRandom(1, 100);
    if(!numeri.includes(numeriCasuali)){
        numeri.push(numeriCasuali);
    }
}

alert(numeri);

var cronometro = 30;

var contoRovescia;

contoRovescia = setInterval(timer, 1000);





/* function */

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  

function timer(){
    document.getElementById('timer').innerHTML = -- cronometro;
    if(cronometro == 0){
        alert('Tempo scaduto. Adesso prova tu a riscrivere i numeri che hai visto');
        clearInterval(contoRovescia);

        for(var i = 0; i <= 5; i++){
           numeroUtente = parseInt(prompt('Inserisci un numero:'));
           if(!numeriUtente.includes(numeroUtente)){
              numeriUtente.push(numeroUtente);
            }else{
             alert('Attenzione!!! Hai già inserito questo numero');
            }

            if(numeriUtente.includes(numeri[i])){
                esito.push(numeroUtente);
            }
        }

        alert('Hai indivinato:'+ ' ' + esito.length + 'numeri');
        alert('I numeri indovinati sono:' + ' ' + esito);
    }
}
