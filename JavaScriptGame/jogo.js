var timerId = null; //variável que armazena a chamada da função timeout

function iniciaJogo(){

    var url = window.location.search;

    var nivelJogo = url.replace("?", "");

    var tempoSegundos = 0;

    // 1 Fácil -> 120 segundos
    // 2 Médio -> 60 segundos
    // 3 Difícil -> 30 segundos

    if(nivelJogo == 1){
        tempoSegundos = 120;
    }

    if(nivelJogo == 2){
        tempoSegundos = 60;
    }

    if(nivelJogo == 3){
        tempoSegundos = 30;
    }

    //inserindo segundos no SPAN
    document.getElementById('cronometro').innerHTML = tempoSegundos;

    //quantidade de balões
    var quantidadeBaloes = 20;

    criaBalao(quantidadeBaloes);

    //imprimir quantidade baloes inteiros
    document.getElementById('baloesInteiros').innerHTML = quantidadeBaloes;
    document.getElementById('baloesEstourados').innerHTML = 0;

    contagemTempo(tempoSegundos + 1);

}

function contagemTempo(segundos){

    segundos = segundos -1;

    if( segundos == -1){
        clearTimeout(timerId); // para a execução da função setTimeout
        gameOver();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;
    
    setTimeout("contagemTempo("+segundos+")", 1000);
}

function gameOver(){
    removeEventoBaloes();
    alert("Fim de jogo, você não conseguiu estourar todos os balões a tempo");
}

function criaBalao(quantidadeBaloes){

    for(var i = 0; i < quantidadeBaloes; i++){

        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b'+i;
        balao.onclick = function(){ estourar(this); };

        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(e){

    var idBalao = e.id;

    document.getElementById(idBalao).setAttribute("onclick", "");
    document.getElementById(idBalao).src = 'imagens/balao_azul_pequeno_estourado.png'

    pontuacao(-1);
}

function pontuacao(acao){

    var baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
    var baloesEstourados = document.getElementById('baloesEstourados').innerHTML;

    baloesInteiros = parseInt(baloesInteiros);
    baloesEstourados = parseInt(baloesEstourados);

    baloesInteiros = baloesInteiros + acao;
    baloesEstourados = baloesEstourados - acao;

    document.getElementById('baloesInteiros').innerHTML = baloesInteiros;
    document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

    situacaoJogo(baloesInteiros);
}

function situacaoJogo(baloesInteiros){
    if(baloesInteiros == 0){
        alert("Parabéns, você conseguiu estourar todos os balões a tempo");
        pararJogo();
    }
}

function pararJogo(){
    clearTimeout(timerId);
}

function removeEventoBaloes(){
    var i = 1; //contado para recuperar balões por id

    //percorre os elementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)){
        //retira o evento onclick do elemento
        document.getElementById('b'+i).onclick = "";
        i++; // faz a iteração da variável i
    }
}