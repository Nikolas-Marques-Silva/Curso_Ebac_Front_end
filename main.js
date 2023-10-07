$(document).ready(function() {
    $('#carousel').slick({ autoplay: true });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(1000)
    });
    $('.telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            menssagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira seu nome"
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} não preenchidos`)
            }
        }
    });
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});