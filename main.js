$(document).ready(function() { 
    $('header button').click(function() {
        $('form').slideDown();
})

    $('#botao-cancelar').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    console.log(enderecoDaNovaImagem);

    const novaImagem = enderecoDaNovaImagem;
    const novoItem = $('<li style="display: none"></li>');

    $(`<img src="${novaImagem}" />`).appendTo(novoItem);
    $(`
        <div class="overlay-img"> 
            <a href="${novaImagem}" target="_blank" title="Ver Imagem em tamanho real">
                Ver Imagem em tamanho real
            </a>
        </div>    
    `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})