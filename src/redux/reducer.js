import { initialState, uniqueId } from './initialState.js'

export const todoReducer = (state = initialState, action) => {
    const { type, title, filterType, id } = action;
    const { todos } = state;
    switch (type) {
        case 'ADD':
            return {
                ...state,
                todos: [...todos, {
                    id: uniqueId.get(),
                    title,
                    completed: false
                }]
            }
        case 'TOGGLE':
            return {
                ...state,
                todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
            }
        case 'FILTER':
            return {
                ...state,
                filters: filterType
            }
        default:
            return state
    }
}
