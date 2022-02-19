import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/actions';

const AddTodo = () => {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useDispatch()
    const ref = useRef();

    const onItemSubmitted = (e) => {
        e.preventDefault();
        dispatch(add(inputVal))
        setInputVal('')
    }
    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
            ref.current.onSubmit;
        }
    }
    return (
        <form ref={ref} onKeyUp={onPressEnter} onSubmit={onItemSubmitted}>
            <input type="text" required value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo;