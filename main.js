$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault()

        const tarefa = $('#tarefa').val()

        if (tarefa !== '') {
            let novoItem = $('<li style="display: none"></li>')
            let link = $(`<a>${tarefa}</a>`)
            link.appendTo(novoItem)
            novoItem.appendTo('ul')

            novoItem.fadeIn(1000)

            $('#tarefa').val('')

            link.click(function() {
                novoItem.fadeOut()

                const conteudoA = link.text()
                let conteudoTracado = $('<li style="display: none"></li>')
                let linkTracado = $('<a style="text-decoration: line-through"></a>').text(conteudoA)
                linkTracado.appendTo(conteudoTracado)
                conteudoTracado.appendTo('ul')

                conteudoTracado.fadeIn(1000)
            })
        } else {
            alert('Você precisa preencher este campo!')
        }
    })
})