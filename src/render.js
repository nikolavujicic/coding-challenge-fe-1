import {getFilteredTodos} from './utils.js'
function renderApp(...rest) {
  return `<div>${rest.map(item => item).join('')}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function filters(filterType) {
  const filterOtions = ['all','open','closed']
  const singleFilterOption = (item)=>`
  <input type="radio" data-element="handleFilters" data-id="${item}" ${filterType === item ? ' checked' : ''} name="filter"/>
  <label>Show ${item}</label>
  `

  const renderFilters = filterOtions.map(singleFilterOption).join('')
  return `
  <form>
    ${renderFilters}
  </form>`
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
      ${todo.title}
    </li>`;
}

export default (element, state) => {
  const todos = getFilteredTodos(state);
  const todoItems = todos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    filters(state.filters),
    renderTodos(todoItems)
  );
}
