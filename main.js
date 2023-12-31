$(document).ready(() => {
    $("#cep").mask("99999-999");

    $("#btn-cep").click(() => {
        const cep = $("#cep").val();
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $("#btn-cep");

        $(botao).find('i').addClass('d-none');
        $(botao).find('.spinner-border').removeClass('d-none');

        $.ajax(url).done((data) => {
            const logradouro = data.logradouro;
            const bairro = data.bairro;
            const localidade = data.localidade;
            const estado = data.uf;
            const endereco = `${logradouro}, ${bairro} - ${localidade} - ${estado}`;

            $("#endereco").val(endereco);

            setTimeout(() => {
                $(botao).find('.spinner-border').addClass('d-none');
                $(botao).find('i').removeClass('d-none');
            }, 2000);
        })
    })
})