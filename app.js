function onReady() {
  let id = 0;
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
    newToDoText.value = '';

    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){

      const newToDo = document.createElement('li');

      
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = "Delete";

      newToDo.appendChild(checkbox);
      newToDo.appendChild(title);
      newToDo.appendChild(deleteButton);

      toDoList.appendChild(newToDo);

      deleteButton.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
      });
    })
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
