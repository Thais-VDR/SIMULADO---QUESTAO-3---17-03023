let botaoAdiciona = document.querySelector('#adicionar-consulta')
botaoAdiciona.addEventListener('click', function (evento){

    evento.preventDefault()

    let form = document.querySelector('#paciente-adiciona')

    let dados = obterValoresDoForm(form)

    adicionaPacienteNaTabela(dados)
})
function adicionaPacienteNaTabela(dados) {
    let dadosTr = montarTr(dados)
    let tabela = document.querySelector('#tabelas-pacientes')

    tabela.appendChild(dadosTr)
}

function montarTr(dados) {
    let dadosTr = document.createElement('tr')
    dadosTr.classList.add('dados')

    dadosTr.appendChild(montarTd(dados.nome, 'info-nome'))
    dadosTr.appendChild(montarTd(dados.data, 'info-data'))
    dadosTr.appendChild(montarTd(dados.horario, 'info-horario'))
    dadosTr.appendChild(montarTd(dados.medico, 'info-medico'))
  
    return dadosTr
}

function montarTd(dados, classe) {
    let td = document.createElement('td')
    td.textContent = dados
    td.classList.add(classe)

    return td
}
function obterValoresDoForm(form){
    let dados = {
        nome: form.nome.value,
        data: form.data.value,
        horario: form.horario.value,
        medico: form.medico.value,
    }
    return dados
}