import React from 'react';
import style from './TodoList.module.css';
import { MdDeleteForever } from 'react-icons/md/';

const TodoList = ({ todos, onDeleteTodo, toggleCompleted }) => {
  return (
    <div>
      <ul className={style.container}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={style.item}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted(id)}
            />
            <p>{text}</p>
            <button
              type="button"
              className={style.btn}
              onClick={() => onDeleteTodo(id)}
            >
              <MdDeleteForever className={style.icon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
