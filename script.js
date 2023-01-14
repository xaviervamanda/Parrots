let qntCartas;

function removeClasseEscondido (lista){
    for (let i = 0; i < lista.length; i++){
        lista[i].classList.remove ('escondido');    
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function inicioJogo (){
    qntCartas = prompt ('Com quantas cartas você quer jogar? (Insira um número par de 4 a 14)');
    
    if (Number(qntCartas) % 2 === 0 && Number(qntCartas) >= 4 && Number(qntCartas) <= 14){
        // adiciona qntCartas no site
        if (qntCartas === "4"){
            const qntCartasEscolhida = document.querySelectorAll('.first .middle');
            removeClasseEscondido (qntCartasEscolhida);   
        } if (qntCartas === "8"){
            const qntCartasEscolhida = document.querySelectorAll('.first .middle');
            const qntCartasEscolhida1 = document.querySelectorAll('.second .middle');
            removeClasseEscondido (qntCartasEscolhida);
            removeClasseEscondido (qntCartasEscolhida1);
        } if (qntCartas === "6"){
            const qntCartasEscolhida = document.querySelectorAll('.first .escondido');
            removeClasseEscondido (qntCartasEscolhida);
        } if (qntCartas === "10"){
            const qntCartasEscolhida = document.querySelectorAll('.first .escondido');
            const qntCartasEscolhida1 = document.querySelectorAll('.second .middle');
            removeClasseEscondido (qntCartasEscolhida);
            removeClasseEscondido (qntCartasEscolhida1);
        } if (qntCartas === "12"){
            const qntCartasEscolhida = document.querySelectorAll('.first .escondido');
            const qntCartasEscolhida1 = document.querySelectorAll('.second .escondido');
            removeClasseEscondido (qntCartasEscolhida);
            removeClasseEscondido (qntCartasEscolhida1);
        } if (qntCartas === "14"){
            const qntCartasEscolhida = document.querySelectorAll('.escondido');
            removeClasseEscondido (qntCartasEscolhida);
        }
    } else {
        alert("Quantidade de cartas inválida!");
        inicioJogo();
}
}

inicioJogo();

function inserirImagemAleatoria (){
    let bancoImagensSeis = ['cogu.gif', 'cogu.gif', 'pessoa.gif', 'pessoa.gif', 'comendo-cogu.gif', 'comendo-cogu.gif'];
    let bancoImagensSeis1 = ['cogu-rodando.gif', 'cogu-rodando.gif', 'crazy-cat.gif', 'crazy-cat.gif', 'cogu-vibe.gif', 'cogu-vibe.gif'];
    let bancoImagensQuatro = ['cogu-urso.gif', 'cogu-urso.gif', 'pessoa.gif', 'pessoa.gif'];
    let bancoImagensOito = ['cogu.gif', 'cogu.gif', 'pessoa.gif', 'pessoa.gif', 'comendo-cogu.gif', 'comendo-cogu.gif', 'cogu-chuva.gif', 'cogu-chuva.gif'];
    if (qntCartas === "4"){
        bancoImagensQuatro = bancoImagensQuatro.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .middle.front-face');
        console.log(listaDivs);
        for (let i = 0; i < bancoImagensQuatro.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatro[i]}">`;
        }
    } if (qntCartas === "6"){
        bancoImagensSeis = bancoImagensSeis.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .front-face');
        for (let i = 0; i < bancoImagensSeis.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensSeis[i]}">`;
        }
    }
}

inserirImagemAleatoria();


    
