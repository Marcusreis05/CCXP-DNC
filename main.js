const ingressos = [];

// CardsHighliht

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("cards")
}

// CardsKeyboardCode - Para descobri o codigo das keyCaps

function checkKeyboardCode()
{
    document.addEventListener("keydown",(event) =>{
        var name = event.key;
        var code = event.code;

        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);  
        }, false);
}

// CardsKeyboard

function addKeyboardEventListeners()
{
    document.addEventListener("keydown", function(event){

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("cards");    
            ingresso2.classList.remove("cards");
            ingresso3.classList.remove("cards");
            ingresso4.classList.remove("cards");
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("cards");
            ingresso2.classList.toggle("cards");
            ingresso3.classList.remove("cards");
            ingresso4.classList.remove("cards");
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("cards");
            ingresso2.classList.remove("cards");
            ingresso3.classList.toggle("cards");
            ingresso4.classList.remove("cards");
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove("cards");
            ingresso2.classList.remove("cards");
            ingresso3.classList.remove("cards");
            ingresso4.classList.toggle("cards");
        }
            
    }, false);
}

// Em fase de teste

selectCard = (selector) =>{
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}

showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();

showSelectedCards()