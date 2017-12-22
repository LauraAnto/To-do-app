function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  const deleteButton = document.getElementById("deleteButton");


  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement("li");

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = "";

  });

  deleteButton.addEventListener("click", event => {

    let toDos = document.getElementsByTagName("li");

    for (var i = toDos.length - 1; i >= 0; i--) {

      if (toDos[i].children[0].checked == true) {

        toDos[i].remove();

      }

    }

  });
}

window.onload = function() {
  onReady();
};
