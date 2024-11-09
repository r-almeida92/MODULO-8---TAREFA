const form = document.getElementById('form-telefones'); /* Obtém o formulário com o id 'form-telefones' */
const nome = []; /* Cria um array para armazenar os nomes*/
const telefone = []; /* Cria um array para armazenaros telefones*/

let linhas = ''; /* Variável para armazenar as linhas da tabela */

form.addEventListener('submit', function (e) { /* Adiciona um evento para o formulário quando for enviado */
    e.preventDefault(); /* Impede que a página seja recarregada ao enviar o formulário */

    adicionaLinha(); /* Chama a função para adicionar a linha à tabela */
    atualizaTabela(); /* Chama a função para atualizar a tabela com as novas linhas */
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato'); /* Obtém o valor do campo de nome*/
    const inputTelefone = document.getElementById('numero-telefone'); /* Obtém o valor do campo de telefone*/

    nome.push(inputNome.value); /* Adiciona o nome ao array de nomes */
    telefone.push(parseFloat(inputTelefone.value)); /* Adiciona o telefone ao array de telefones */

    let linha = '<tr>'; /* Cria uma nova linha para a tabela */
    linha += `<td>${inputNome.value}</td>`; /* Adiciona o nome na célula da linha */
    linha += `<td>${inputTelefone.value}</td>`; /* Adiciona o telefone na célula da linha */
    linha += '</tr>'; /* Finaliza a linha da tabela */

    linhas += linha; /* Adiciona a nova linha à variável 'linhas' */

    inputNome.value = ''; /* Limpa o campo de nomes após adicionar */
    inputTelefone.value = ''; /* Limpa o campo de telefones após adicionar */
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); /* Obtém o corpo da tabela onde as linhas serão adicionadas */
    corpoTabela.innerHTML = linhas; /* Atualiza o corpo da tabela com as novas linhas */
}
