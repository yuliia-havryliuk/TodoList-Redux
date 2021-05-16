import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actions from './redux/todoApp/todo-types';

const itemsReducer = (state = [], { type, payload, todoId }) => {
  switch (type) {
    case actions.ADD:
      return [payload, ...state];

    case actions.DELETE:
      return state.filter(todo => todo.id !== payload);

    case actions.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    case actions.EDIT_TODO:
      return state.map(todo =>
        todo.id === payload ? { ...todo, edit: !todo.edit } : todo,
      );

    case actions.HANDLE_SUBMIT:
      return payload;

    case actions.CHANGE_TODO:
      return state.map(todo =>
        todo.id === todoId ? { ...todo, text: payload } : todo,
      );

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => state;

const messageReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actions.ADD_MESSAGE:
      return payload;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  message: messageReducer,
});
const rootReducer = combineReducers({
  todos: todosReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;
