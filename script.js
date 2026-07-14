// Variabili per calcolare la media dei numeri dispari
let sommaDispari = 0;
let contaDispari = 0;

console.log("--- NUMERI PARI DA 1 A 20 ---");

// Facciamo partire il ciclo da 1 fino a 20 compreso
for (let i = 1; i <= 20; i++) {
    
    // L'operatore % (modulo) restituisce il resto della divisione. 
    // Se un numero diviso 2 ha resto 0, significa che è pari.
    if (i % 2 === 0) {
        
        // Se è pari, lo stampiamo direttamente a schermo
        console.log(i);
        
    } else {
        
        // Se non è pari, allora è dispari.
        // Aggiungiamo il valore corrente alla somma totale dei dispari
        sommaDispari = sommaDispari + i; 
        
        // Incrementiamo il nostro contatore di 1 per ricordarci quanti dispari abbiamo trovato
        contaDispari++; 
    }
}

// Fuori dal ciclo, calcoliamo la media dividendo la somma totale per quanti dispari abbiamo contato
let mediaDispari = sommaDispari / contaDispari;

console.log("--- MEDIA NUMERI DISPARI ---");
console.log(`La media di tutti i numeri dispari da 1 a 20 è: ${mediaDispari}`);