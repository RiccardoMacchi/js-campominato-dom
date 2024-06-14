// Recupero bottone generazione gioco
const gameStart = document.getElementById("click_me");
// Recupero container in pagina
const container = document.getElementById("container");
// Recupero output per risultati
const result = document.getElementById("display_result");



gameStart.addEventListener("click",
    ()=>{
        // Per far si che il bottone mi cancelli quello che ha appena generato e in caso di duble click rimanga solo uno blocco
        container.innerHTML = "";
        // contatore click
        let n = 0
        // Selezione difficoltà
        const difficult = document.getElementById("select_level").value
        console.log(difficult)
        let numBlock;
        if (difficult === "cento"){
            numBlock = 100;
        } else if (difficult === "ottantuno") {
            numBlock = 81;
        } else if (difficult === "quarantanove") {
            numBlock = 49;
        }

        // Numero bombe in pagina
        document.getElementById("n_bomb").innerHTML = numBlock

        // Generazione numeri random
        const randomNumbers = genRandSeq(1,numBlock - 1);
        console.log(randomNumbers);

        // Stampa singoli numeri arrey
        for (let i = 0; i < randomNumbers.length; i++) {
            let allNum = randomNumbers;
        }

       

        // Creazione ciclo per generare 100 blocchi
        for (let i = 0; i < numBlock; i++){
            // Generazione square in pagina
            let divSquare = newElCl("div","square");
            divSquare.innerHTML = `<span>${i + 1}</span>`;
            // Aggiunta classe personalizzata per livelli
            divSquare.classList.add(difficult);
            container.append(divSquare);
            // Cambio classe al click
            divSquare.addEventListener("click",
                ()=> {console.log(n)
                    if (randomNumbers.includes(i + 1)) {
                        divSquare.classList.toggle("red");
                        result.classList.add("red")
                        result.innerHTML = `<h3>Mi Dispiace! Hai schiacciato un bomba... HAI PERSO <i class="fa-solid fa-burst"></i></h3><h4>Hai comunque totalizzato ${n * 10} punti</h4>`
                        // Tutte le bombe diventano red
                        console.log("questo è", randomNumbers)
                        // il softoware scopre tutte le bombe nascoste prova
                        // while (i = randomNumbers.length){
                        //     if (randomNumbers.includes(i)) {
                        //         divSquare.classList.add("red")
                        //     }
                    } else if (n === numBlock -17) {
                        result.classList.add("win")
                        result.innerHTML = `<span>INCREDIBILE!! HAI VINTO!! ora vai e vinci al superenalotto<i class="fa-solid fa-burst"></i></span>`
                    } else {
                        n++
                        divSquare.classList.toggle("azzur")
                    }
                    
                    
                    
                }
            )
        }
    }
)






