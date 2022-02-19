import React from 'react'
import TodoList from './components/TodoList/TodoList';
import FilterTodoList from './components/FilterTodoList/FilterTodoList'
import AddTodo from './components/AddTodo/AddTodo'

const App = () => {
    return (
        <>
            <AddTodo />
            <FilterTodoList />
            <TodoList />
        </>
    )
}

export default App