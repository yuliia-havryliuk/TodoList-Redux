import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <Layout>
      <TodoApp />
    </Layout>
  );
}

export default App;
