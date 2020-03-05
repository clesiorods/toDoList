var ul_lista = document.querySelector('#ul');
var caixa = document.querySelector('#caixa');
var botao = document.querySelector('#botao');

var vet_lista = JSON.parse(localStorage.getItem('vet_Local')) || [];

function render() {
    ul_lista.innerHTML = '';
    vet_lista.map((item, index) => {
        var novo_li = document.createElement('li');
        novo_li.innerHTML = item;
        ul_lista.appendChild(novo_li);


        var a_del = document.createElement('a');
        a_del.innerHTML = ' Excluir';
        a_del.setAttribute('key', index);
        a_del.setAttribute('href', '#');
        novo_li.appendChild(a_del);

        a_del.onclick = function() {
            remover(this.getAttribute('key'));
        }
    });
}

function adicionar() {
    vet_lista.push(caixa.value);
    render();
    caixa.value = '';
    salvar();
}

botao.onclick = adicionar;
render();

function remover(pos) {
    vet_lista.splice(pos, 1);
    render();
    salvar();
}

function salvar() {
    localStorage.setItem('vet_Local', JSON.stringify(vet_lista));
}