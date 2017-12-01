var rodada = 1;
var matrizJogo = Array(3);

matrizJogo['A'] = Array(3);
matrizJogo['B'] = Array(3);
matrizJogo['C'] = Array(3);

matrizJogo['A'][1] = 0;
matrizJogo['A'][2] = 0;
matrizJogo['A'][3] = 0;

matrizJogo['B'][1] = 0;
matrizJogo['B'][2] = 0;
matrizJogo['B'][3] = 0;

matrizJogo['C'][1] = 0;
matrizJogo['C'][2] = 0;
matrizJogo['C'][3] = 0;

$(document).ready(function(){

// ------------------- Cria a função com os comportamentos do botão iniciar ----------------------//

    $('#btnIniciarJogo').click(function(){

// ------------------- Valida a digitação dos apelidos ----------------------//

        if($('#nomeJogador1').val() == ''){
            alert('O apelido do jogador 1 não foi definido');
            return false;
        }

        if($('#nomeJogador2').val() == ''){
            alert('O apelido do jogador 2 não foi definido');
            return false;
        }

// ------------------- Exibe o nome dos jogadores ----------------------//

        $('#labelNomeJogador1').html($('#nomeJogador1').val());
        $('#labelNomeJogador2').html($('#nomeJogador2').val());

// ------------------- Controle a visualização das divs ----------------------//

        $('#paginaInicial').hide();
        $('#palcoJogo').show();

// ------------------- Verifica a posição que foi clicada ----------------------//

        $('.jogada').click(function(){
            
            var campoClicado = this.id;
            $('#' + campoClicado).off();
            jogada(campoClicado);

        });

// ------------------- Verifica a posição que foi clicada ----------------------//
// ----------------- Está fora da função de clique do botão ----------------------//

        function jogada(id){
            var icone = '';
            var ponto = 0;

            if((rodada % 2) == 1){
                icone = 'url("imagens/marcacao_1.png")';
                ponto = -1;
            } else {
                icone = 'url("imagens/marcacao_2.png")';
                ponto = 1;
            }

            rodada++;

            $('#' + id).css('background-image', icone);

            var linhaColuna = id.split('');

            // alert(linhaColuna[0]);
            // alert(linhaColuna[1]);

            matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

            verificaCombinacao();

        }

        function verificaCombinacao(){

            var pontos = 0;

// ------------------- Verifica na horizontal ----------------------//

            for(var i = 1; i <= 3; i++){
                pontos = pontos + matrizJogo['A'][i];
            }
            ganhador(pontos);
            
            pontos = 0;
            for(var i = 1; i <= 3; i++){
                pontos = pontos + matrizJogo['B'][i];
            }
            ganhador(pontos);
            pontos = 0;

            for(var i = 1; i <= 3; i++){
                pontos = pontos + matrizJogo['C'][i];
            }
            ganhador(pontos);
            pontos = 0;

// ------------------- Verifica na vertical ----------------------//

            for(var l = 0; l < 3; l++){
                
                pontos = 0;

                pontos += matrizJogo['A'][l];
                pontos += matrizJogo['B'][l];
                pontos += matrizJogo['C'][l];

                ganhador(pontos);
            }

// ------------------- Verifica nas diagonais ----------------------//

            pontos = 0;
            pontos = matrizJogo['A'][1] + matrizJogo['B'][2] + matrizJogo['C'][3];
            ganhador(pontos);

            pontos = 0;
            pontos = matrizJogo['A'][3] + matrizJogo['B'][2] + matrizJogo['C'][1];

        }

        function ganhador(pontos){
            if(pontos == -3){
                var jogador1 = $('#nomeJogador1').val();
                alert(jogador1 + ' é o vencedor');
                $('.jogada').off();
            } else if(pontos == 3){
                var jogador2 = $('#nomeJogador2').val();
                alert(jogador2 + ' é o vencedor');
                $('.jogada').off();
            }
        }

    })

});