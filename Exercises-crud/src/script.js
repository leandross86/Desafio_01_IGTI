let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    render();
});

function preventFormSubmit(){
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}
function activateInput() {
    function insertName(newName) {
        //globalNames.push(newName);
        globalNames = [...globalNames, newName]
        render();
    }
    function updateName(newName) {
        globalNames[currentIndex] = newName;
    }

    function handleTyping(event) {
        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if(!hasText) {
            clearInput();
            return
        }

        if(event.key === 'Enter'){
            if (isEditing){
                updateName(event.target.value)
            } else {
                insertName(event.target.value);
            }
            render();
            isEditing = false;
            clearInput();
        }
    }
    inputName.addEventListener('keyup', handleTyping);
    inputName.focus();
}

function render() {
    // Função para deletar
    function createDeleteButton(index) {
        function deleteName() {
            // globalNames.splice(index, 1);
            // globalNames = globalNames.filter((name, i)  => {
            //     if (i ===index) {
            //         return false;
            //     } 
            //     return true;
            //     return i !== index;
            // });
            globalNames = globalNames.filter((_, i ) => i !== index)
            render();
        }
        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener('click', deleteName);
        return button;
    }
    function createSpan(name, index) {
        function editItem() {
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }
        // Criando span para pegar o texto
        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem)

        return span;
    }

    // Limpando o input
    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    // Criando o elemento de lista
    var ul = document.createElement('ul');

    // Percorrendo todos os nomes e criando o botão
    for(var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];
        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);
                
        //Inserindo o na lista dentro de span
        li.appendChild(button);
        li.appendChild(span);

        // Inserindo li dentro de ul em loop
        ul.appendChild(li);
    }

    // Pega ul e insere na div e limpa o input
    divNames.appendChild(ul);
    clearInput();
};
function clearInput(){
    inputName.value = '';
    inputName.focus();
}
