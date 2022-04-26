const myForm = document.myform;
const name = myForm.name;
const hello = document.querySelector('h2');

function submit(e) {
  e.preventDefault();
  hello.innerHTML = `Hello ${name.value}`;
}

myForm.addEventListener('submit', submit);

const input = document.getElementById('list-input');
const button = document.getElementById('button-input');
const container = document.querySelector('.container');
const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

toDoList.forEach((toDo) => {
  container.innerHTML += `
  <div>
    <label ${toDo.done ? 'style = "text-decoration: line-through;"' : ''}>
      <input type="checkbox" ${toDo.done ? 'checked disabled' : ''}>
      ${toDo.value}
    </label>
  </div>
  `;
});

function addToDo() {
  const value = input.value;
  if (value) {
    container.innerHTML += `
      <div>
        <label>
          <input type="checkbox">
          ${value}
        </label>
      </div>
    `;
    input.value = '';

    const list = JSON.parse(localStorage.getItem("toDoList")) || [];
    list.push({value: value, done: false});
    localStorage.setItem("toDoList", JSON.stringify(list));
  }
}

function compliteToDo(event) {
  const label = event.target.closest('label');
  if (!label) {
    return;
  }

  label.style.textDecoration = 'line-through';
  const checkbox = label.querySelector('input');
  checkbox.setAttribute('disabled', 'true');
  checkbox.setAttribute('checked', 'true');

  const labelList = container.querySelectorAll('label');

  const index = labelList.indexOf(label);

  const list = JSON.parse(localStorage.getItem("toDoList")) || [];
  list[index].done = true;
  localStorage.setItem("toDoList", JSON.stringify(list));
}

container.addEventListener('click', compliteToDo);


