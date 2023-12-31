$(document).ready(() => {
    $("#cep").mask("99999-999");

    $("#btn-cep").click(() => {
        const cep = $("#cep").val();
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $("#btn-cep");

        $(botao).find('i').addClass('d-none');
        $(botao).find('.spinner-border').removeClass('d-none');

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const {logradouro, bairro, localidade, uf} = data;
            const endereco = `${logradouro}, ${bairro}, ${localidade} - ${uf}`;

            $("#endereco").val(endereco);
        })
        .catch(error => {
            alert("Ocorreu um erro. Verifique o CEP e tente novamente mais tarde.")
        })
        .finally(() => {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('.spinner-border').addClass('d-none');
        })
    })
})