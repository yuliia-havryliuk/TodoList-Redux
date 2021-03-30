import React, { Component } from 'react';
import style from './TodoEditor.module.css';
import IconButton from '../../../templates/IconButton/IconButton';

class TodoEditor extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handelChange = event => {
    this.setState({
      message: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.message}
            onChange={this.handelChange}
            placeholder="Add task here"
          >
            {' '}
          </textarea>
          <IconButton type="submit" onClick={this.addTask}>
            Add Task
          </IconButton>
        </form>
      </div>
    );
  }
}
export default TodoEditor;
