console.log('connecté'); 
const form = document.getElementById('form');
console.log(form);
const todo = document.getElementById('todo');
console.log(todo);

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('bouton cliqué');
    const todoValue = todo.value;
    console.log(todoValue);
    // créé l'élément
let item = `<div class="item">
<p>${todoValue}</p>
<button class="btn-delete">
    <i class="fas fa-trash-alt"></i>
</button>
<button class="btn-archive">
    <i class="fas fa-check-circle"></i>
</button>`;

const listItems = document.querySelector('.list-items');
console.log(listItems);
listItems.innerHTML += item;
});

