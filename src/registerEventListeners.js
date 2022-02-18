import store from './redux/store.js';
import {add, toggle, filter} from './redux/actions.js';
const {dispatch} = store;

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  dispatch(add(todoInput.value));
});

addListener('keydown', '[data-element="addTodoInput"]', (e) => {
  if (e.keyCode === 13) {
    const todoInput = document.querySelector('[data-element="addTodoInput"]');
    todoInput.value && dispatch(add(todoInput.value));
  }
});

addListener('click', '[data-element="handleFilters"]', (e) => {
  const filterType = e.target.dataset.id;
  dispatch(filter(filterType));
})

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  dispatch(toggle(id));
});
