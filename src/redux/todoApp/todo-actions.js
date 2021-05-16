import actions from './todo-types';
import { v4 as uuidv4 } from 'uuid';

const addTodo = text => ({
  type: actions.ADD,
  payload: {
    id: uuidv4(),
    text,
    completed: false,
    edit: false,
  },
});
const deleteTodo = todoId => ({
  type: actions.DELETE,
  payload: todoId,
});
const toggleCompleted = todoId => ({
  type: actions.TOGGLE_COMPLETED,
  payload: todoId,
});
const onEditTodo = todoId => ({
  type: actions.EDIT_TODO,
  payload: todoId,
});
const addMessage = event => ({
  type: actions.ADD_MESSAGE,
  payload: event,
});
const handleSubmit = message => ({
  type: actions.HANDLE_SUBMIT,
  payload: message,
});
const onChangeTodo = (message, todoId) => ({
  type: actions.CHANGE_TODO,
  payload: message,
  todoId: todoId,
});
export default {
  addTodo,
  deleteTodo,
  toggleCompleted,
  onEditTodo,
  addMessage,
  handleSubmit,
  onChangeTodo,
};
