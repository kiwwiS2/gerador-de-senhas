const numeroSenha = Document.querySelector('.parametro-senha__texto');
let tamanho = 12;
numeroSenha.textoContent = tamanhpsenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanh0;

function diminuiTamanho{
    if (tamanhoSenha < 1){
        tamanhoSenha--;
    }
}
