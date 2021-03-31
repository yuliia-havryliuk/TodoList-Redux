import React from 'react';
import style from './TodoList.module.css';
import { MdDeleteForever } from 'react-icons/md/';
import { AiFillCheckCircle, AiFillEdit } from 'react-icons/ai';

const TodoList = ({ todos, onDeleteTodo, toggleCompleted }) => {
  return (
    <div>
      <ul className={style.container}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? style.completedItem : style.item}>
            <button type="button" onClick={() => toggleCompleted(id)}>
              <AiFillCheckCircle
                className={
                  completed ? style.btnCompleted : style.btnNotCompleted
                }
              />
            </button>
            <p>{text}</p>
            <button type="button" className={style.btnEdit}>
              <AiFillEdit className={style.icon} />
            </button>
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
