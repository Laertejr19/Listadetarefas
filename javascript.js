function adotarefas() { //Adiciona uma nova tarefa à lista.
    const taskinput = document.getElementById('taskinput'); //Obtém o input de tarefa.
    const tasklist = document.getElementById('tasklist'); //Obtém a lista de tarefa.
    const tasktext = taskinput.value.trim(); //Obtém o valor do input e remove espaços extras.

    if (tasktext !== '') { //Verifica se o texto da tarefa não está vazio.

        const listitem = document.createElement('li'); //Cria um novo item.
        listitem.textContent = tasktext; //Define o texto do item de lista.
        const deletebtn = document.createElement('span'); //Cria o botão de apagar.
        deletebtn.textContent = 'x'; //Define o texto do botão.
        deletebtn.className = 'delete'; //Define a classe CSS para o botão.
        deletebtn.onclick = function () { //Adiciona um evento de clique para apagar a tarefa.
            tasklist.removeChild(listitem); //Remove o item da lista.
            listitem.appendChild(deletebtn); //Adiciona o botão de apagar ao item de lista.
            tasklist.appendChild(listitem); //Adiciona o item de lista à lista de tarefas.
            taskinput.value = ''; //Limpa o input de tarefa.
        }
    } // Adiciona um evento de tecla ao input de tarefa.
    document.getElementById('taskinput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { //Verifica se a tecla pressionanda é 'enter'.
            addtask(); //Chama a função para adicionar a tarefa.
        }
    });
}