import React from 'react';
import ComicList from './components/ComicList';
import ComicForm from './components/ComicForm';

function App() {
  return (
    <div>
      <h1>Comic Inventory</h1>
      <ComicForm />
      <ComicList />
    </div>
  );
}

export default App;
