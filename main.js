const form = document.getElementById('form-atividade'); /* Obtém o formulário com o id 'form-atividade' */
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>'; /* Define a imagem de aprovado */
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji lamentando"/>'; /* Define a imagem de reprovado */
const atividades = []; /* Cria um array para armazenar os nomes das atividades */
const notas = []; /* Cria um array para armazenar as notas das atividades */
const spanAprovado = '<span class = "resultado aprovado">Aprovado!</span>'; /* Define o HTML da mensagem de aprovação */
const spanReprovado = '<span class = "resultado reprovado">Reprovado!</span>'; /* Define o HTML da mensagem de reprovação */
const notaMinima = parseFloat(prompt("Digite a nota mínima:")) /* Solicita ao usuário a nota mínima de aprovação e converte para float */

let linhas = ''; /* Variável para armazenar as linhas da tabela */

form.addEventListener('submit', function (e) { /* Adiciona um evento para o formulário quando for enviado */
    e.preventDefault(); /* Impede que a página seja recarregada ao enviar o formulário */

    adicionaLinha(); /* Chama a função para adicionar a linha à tabela */
    atualizaTabela(); /* Chama a função para atualizar a tabela com as novas linhas */
    atualizaMediaFinal(); /* Chama a função para atualizar a média final */
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade'); /* Obtém o valor do campo de nome da atividade */
    const inputNotaAtividade = document.getElementById('nota-atividade'); /* Obtém o valor do campo de nota da atividade */

    if (atividades.includes(inputNomeAtividade.value)) { /* Verifica se o nome da atividade já foi inserido */
        alert(`A atividade "${inputNomeAtividade.value}" já foi inserida.`); /* Se já foi inserido, exibe um alerta */
    } else {
        atividades.push(inputNomeAtividade.value); /* Adiciona o nome da atividade ao array de atividades */
        notas.push(parseFloat(inputNotaAtividade.value)); /* Adiciona a nota da atividade ao array de notas */

        let linha = '<tr>'; /* Cria uma nova linha para a tabela */
        linha += `<td>${inputNomeAtividade.value}</td>`; /* Adiciona o nome da atividade na célula da linha */
        linha += `<td>${inputNotaAtividade.value}</td>`; /* Adiciona a nota da atividade na célula da linha */
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; /* Exibe o emoji de aprovado ou reprovado, dependendo da nota */
        linha += '</tr>'; /* Finaliza a linha da tabela */

        linhas += linha; /* Adiciona a nova linha à variável 'linhas' */
    }

    inputNomeAtividade.value = ''; /* Limpa o campo de nome da atividade após adicionar */
    inputNotaAtividade.value = ''; /* Limpa o campo de nota da atividade após adicionar */
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); /* Obtém o corpo da tabela onde as linhas serão adicionadas */
    corpoTabela.innerHTML = linhas; /* Atualiza o corpo da tabela com as novas linhas */
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal(); /* Calcula a média final das notas */

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); /* Exibe a média final no HTML */
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; /* Exibe a mensagem de aprovado ou reprovado dependendo da média */
}

function calculaMediaFinal() {
    let somaDasNotas = 0; /* Inicializa uma variável para somar as notas */

    for (let i = 0; i < notas.length; i++) { /* Percorre todas as notas armazenadas */
        somaDasNotas += notas[i]; /* Soma as notas ao total */
    }

    return somaDasNotas / notas.length; /* Retorna a média final das notas */
}
