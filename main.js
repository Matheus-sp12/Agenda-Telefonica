const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('nome-numero');

    let linha = '<tr>';
    linha = linha + `<td>${inputNomeAgenda.value}</td>`;
    linha = linha + `<td>${inputNumeroAgenda.value}</td>`;
    linha = linha + `</tr>`;

    linhas = linhas + linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas


    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
});