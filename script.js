let qntCartas;
let cartaVirada;
let primeiraCarta;
let segundaCarta;
let contadorJogadas = 0;

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
    let bancoImagensSeis = ['cogu', 'cogu', 'pessoa', 'pessoa', 'comendo-cogu', 'comendo-cogu'];
    let bancoImagensSeis1 = ['cogu-rodando', 'cogu-rodando', 'crazy-cat', 'crazy-cat', 'cogu-vibe', 'cogu-vibe'];
    let bancoImagensQuatro = ['cogu-urso', 'cogu-urso', 'pessoa', 'pessoa'];
    let bancoImagensQuatro1 = ['cogu-rodando', 'cogu-rodando', 'crazy-cat', 'crazy-cat'];
    let bancoImagensQuatorze = ['cogu', 'cogu', 'pessoa', 'pessoa', 'comendo-cogu', 'comendo-cogu', 'cogu-chuva', 'cogu-chuva', 'cogu-rodando', 'cogu-rodando', 'crazy-cat', 'crazy-cat', 'cogu-vibe', 'cogu-vibe'];
    
    if (qntCartas === "4"){
        bancoImagensQuatro = bancoImagensQuatro.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .middle.front-face');
        for (let i = 0; i < bancoImagensQuatro.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatro[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensQuatro[i]}`);
        }
    } if (qntCartas === "6"){
        bancoImagensSeis = bancoImagensSeis.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .front-face');
        for (let i = 0; i < bancoImagensSeis.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensSeis[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensSeis[i]}`);
        }
    } if (qntCartas === "8"){
        bancoImagensQuatro = bancoImagensQuatro.sort(comparador);
        bancoImagensQuatro1 = bancoImagensQuatro1.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .middle.front-face');
        const listaDivs1 = document.querySelectorAll('.second .middle.front-face');
        for (let i = 0; i < bancoImagensQuatro.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatro[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensQuatro[i]}`);
        }for (let i = 0; i < bancoImagensQuatro1.length; i++){
            listaDivs1[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatro1[i]}.gif">`;
            listaDivs1[i].parentNode.setAttribute('data-name', `${bancoImagensQuatro1[i]}`);
        }
    }if (qntCartas === "10"){
        bancoImagensSeis = bancoImagensSeis.sort(comparador);
        bancoImagensQuatro = bancoImagensQuatro.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .front-face');
        const listaDivs1 = document.querySelectorAll('.second .middle.front-face');
        for (let i = 0; i < bancoImagensSeis.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensSeis[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensSeis[i]}`);
        }for (let i = 0; i < bancoImagensQuatro.length; i++){
            listaDivs1[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatro[i]}.gif">`;
            listaDivs1[i].parentNode.setAttribute('data-name', `${bancoImagensQuatro[i]}`);
        }
    }if (qntCartas === "12"){
        bancoImagensSeis = bancoImagensSeis.sort(comparador);
        bancoImagensSeis1 = bancoImagensSeis.sort(comparador);
        const listaDivs = document.querySelectorAll('.first .front-face');
        const listaDivs1 = document.querySelectorAll('.second .front-face');
        for (let i = 0; i < bancoImagensSeis.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensSeis[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensSeis[i]}`);
        }for (let i = 0; i < bancoImagensSeis1.length; i++){
            listaDivs1[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensSeis1[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensSeis1[i]}`);
        }
    }if (qntCartas === "14"){
        bancoImagensQuatorze = bancoImagensQuatorze.sort(comparador);
        const listaDivs = document.querySelectorAll('.front-face');
        for (let i = 0; i < bancoImagensQuatorze.length; i++){
            listaDivs[i].innerHTML = `<img data-test="face-up-image" src="./img/${bancoImagensQuatorze[i]}.gif">`;
            listaDivs[i].parentNode.setAttribute('data-name', `${bancoImagensQuatorze[i]}`);
        }
    }
}

inserirImagemAleatoria();

/*function checaCartas(){
    const atributoPrimeiraCarta = primeiraCarta.getAttribute('data-name');
    const atributoSegundaCarta = segundaCarta.getAttribute('data-name');
}*/

function virarCarta (carta){
    primeiraCarta = carta;
    cartaVirada = document.querySelectorAll('.rotate-card');
    
    
    if (cartaVirada.length === 0){
        primeiraCarta.classList.add('rotate-card');
        contadorJogadas += 1;
    } if (cartaVirada.length === 1){
        segundaCarta = document.querySelector('.rotate-card');
        primeiraCarta.classList.add('rotate-card');
        contadorJogadas += 1;
        const atributoPrimeiraCarta = primeiraCarta.getAttribute('data-name');
        const atributoSegundaCarta = segundaCarta.getAttribute('data-name');
        if (atributoPrimeiraCarta != atributoSegundaCarta){
            setTimeout (() => {
                primeiraCarta.classList.remove('rotate-card');
                segundaCarta.classList.remove('rotate-card');
            }, 1000);
        } if (atributoPrimeiraCarta === atributoSegundaCarta){
            primeiraCarta.classList.remove('rotate-card');
            segundaCarta.classList.remove('rotate-card');
            primeiraCarta.classList.add('rotate-card-fixed');
            segundaCarta.classList.add('rotate-card-fixed');
        }
    console.log (document.querySelectorAll('.rotate-card-fixed').length);
    console.log (contadorJogadas); 
    }if (Number(qntCartas) === document.querySelectorAll('.rotate-card-fixed').length){
        setTimeout (() => {
           alert (`Você ganhou em ${contadorJogadas} jogadas!`); 
        }, 500);
        
    } 
}
