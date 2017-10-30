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

    var quantidadeBaloes = 10;

    criaBalao(quantidadeBaloes);

    function criaBalao(quantidadeBaloes){
        for(var i = 0; i < quantidadeBaloes; i++){
            var balao = document.createElement();
            balao.src = 'imagens/balao_azul_pequeno';

            document.getElementById('cenario').appendChild();
        }
    }
}