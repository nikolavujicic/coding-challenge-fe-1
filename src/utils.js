export const getFilteredTodos = function (todos, filterType) {
    switch (filterType) {
        case 'open':
            return todos.filter(todo => !todo.completed)
        case 'closed':
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}