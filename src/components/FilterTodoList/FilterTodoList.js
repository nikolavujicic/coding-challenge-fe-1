import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/actions';

const FilterTodoList = () => {
  const filterOtions = Object.freeze(['all', 'open', 'closed'])

  const dispatch = useDispatch()
  const { filters } = useSelector(state => state.todoReducer)

  const onChangeValue = (event) => {
    const filterValue = event.target.value
    dispatch(filter(filterValue))
  }

  return (
    <form onChange={onChangeValue}>
      {
        filterOtions.map(item => (
          <span key={item}>
            <input type="radio" value={item} defaultChecked={filters === item} name="filter" />
            <label>Show {item}</label>
          </span>
        ))
      }

    </form>
  )
}

export default FilterTodoList;