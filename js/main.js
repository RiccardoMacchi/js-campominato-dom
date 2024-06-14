// Recupero bottone generazione gioco
const gameStart = document.getElementById("click_me");
// Recupero container in pagina
const container = document.getElementById("container")
// Recupero output per risultati
const result = document.getElementById("display_result")





gameStart.addEventListener("click",
    ()=>{
        // Per far si che il bottone mi cancelli quello che ha appena generato e in caso di duble click rimanga solo uno blocco
        container.innerHTML = "";
        // Selezione difficoltà
        const difficult = document.getElementById("select_level").value
        console.log(difficult)
        let numBlock;
        if (difficult === "cento"){
            numBlock = 101
        } else if (difficult === "ottantuno") {
            numBlock = 82
        } else if (difficult === "quarantanove") {
            numBlock = 50
        }

        // Generazione numeri random
        const randomNumbers = genRandSeq(1,numBlock - 1)
        console.log(randomNumbers)

        // Stampa singoli numeri arrey
        for (let i = 0; i < randomNumbers.length; i++) {
            let allNum = randomNumbers
        }

       

        // Creazione ciclo per generare 100 blocchi
        for (let i = 1; i < numBlock; i++){
            // Generazione square in pagina
            let divSquare = newElCl("div","square")
            divSquare.innerHTML = `<span>${i}</span>`
            // Aggiunta classe personalizzata per livelli
            divSquare.classList.add(difficult)
            container.append(divSquare)
            
            // Cambio classe al click
            divSquare.addEventListener("click",
                ()=> {
                    let n= 1
                    n+
                    if (randomNumbers.includes(i)) {
                        divSquare.classList.toggle("red")
                        result.classList.add("red")
                        result.innerHTML = `<span>Mi Dispiace! Hai schiacciato un bomba... HAI PERSO <i class="fa-solid fa-burst"></i></span>`
                        // Tutte le bombe diventano red
                        console.log("questo è", randomNumbers)

                        // il softoware scopre tutte le bombe nascoste prova
                        // while (i = randomNumbers.length){
                        //     if (randomNumbers.includes(i)) {
                        //         divSquare.classList.add("red")
                        //     }
                        }
                    } else if (n === numBlock) {
                        result.classList.add("green")
                        result.innerHTML = `<span>Mi Dispiace! Hai schiacciato un bomba... HAI PERSO <i class="fa-solid fa-burst"></i></span>`
                    } else {
                        divSquare.classList.toggle("azzur")
                    }
                    
                    
                }
            )
        }
    }
)






