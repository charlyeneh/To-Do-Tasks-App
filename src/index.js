import './style.css';

// Array of some simple tasks
const toDoTasksArray = [
  {
    description: 'Wake up time and breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Morning session',
    completed: false,
    index: 2,
  },
  {
    description: 'Lunch break',
    completed: false,
    index: 3,
  },
  {
    description: 'Lessons and project for the day',
    completed: false,
    index: 4,
  },
  {
    description: 'Standup meeting',
    completed: false,
    index: 5,
  },
  {
    description: 'Exercise and bath',
    completed: false,
    index: 6,
  },
  {
    description: 'Light out and sleep',
    completed: false,
    index: 7
  }
];
class ToDoList {
  constructor(toDoTasksArray, container) {
    this.toDoTasksArray = toDoTasksArray;
    this.container = document.querySelector(container);
  }

  displayToDo() {
    this.toDoTasksArray.sort((a, b) => a.index - b.index);

    this.container.innerHTML = this.toDoTasksArray.map((todo) => `
            <article>
            <p><input type="checkbox"> ${todo.description} <span><i class="fas fa-ellipsis-v"></i></span></p>
            <hr class="line-break">
            </article>`).join('');
  }
}

const myToDo = new ToDoList(toDoTasksArray, '.list-item');

document.addEventListener('DOMContentLoaded', () => {
  myToDo.displayToDo();
});
