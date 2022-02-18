export const getFilteredTodos = function (state) {
    const filterType = state.filters;
    switch (filterType) {
        case 'open':
            return state.todos.filter(todo => !todo.completed)
        case 'closed':
            return state.todos.filter(todo => todo.completed)
        default:
            return state.todos
    }
}