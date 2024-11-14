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
})