import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/actions';
import { getFilteredTodos } from '../../utils'
import './TodoList.css'

const TodoList = () => {

    const { todos, filters } = useSelector(state => state.todoReducer)
    const todoList = useMemo(() => getFilteredTodos(todos, filters), [todos, filters])

    const dispatch = useDispatch()

    const onToggleChange = (todoId) => {
        dispatch(toggle(todoId))
    }

    return (
        <ul className='todos'>
            {
                todoList.map(todo => (
                    <li key={todo.id}
                        className={`todos__item todos__item_${todo.completed && 'checked'}`}>
                        <input
                            type="checkbox"
                            defaultChecked={todo.completed}
                            onChange={() => onToggleChange(todo.id)}>
                        </input>
                        <label>{todo.title}</label>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList