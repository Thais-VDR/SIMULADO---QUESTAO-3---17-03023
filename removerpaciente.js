let tabela = document.querySelector('#classes')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
   
})