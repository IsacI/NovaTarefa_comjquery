var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(evento){
    if(evento.key == 'Enter'){
        adicionar();
    }
}

    botaoAdicionar.addEventListener('click', adicionar);

    function adicionar(){
        var tarefa = inputTarefa.value;

    if(tarefa !== ''){
        var li = document.createElement('li');
        li.innerText = tarefa;

        var btnNovo = document.createElement("BUTTON");
        btnNovo.innerHTML = 'Excluir';

        li.appendChild(btnNovo);

        btnNovo.onclick = function(){ 
            li.classList.add('teste');
            li.remove(li);
        }

        li.classList.add('paraFazer');
        li.onclick = function(){
            li.classList.remove('paraFazer');
            li.classList.add('feitas');
        }
        li.ondblclick = function(){
            li.classList.remove('feitas');
            li.classList.add('paraFazer');
        }

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);
        
        inputTarefa.value = '';
    }
} 