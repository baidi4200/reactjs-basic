import './App.css';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todos</h1>
        <Todo text='Learn React' />
      </header>
    </div>
  );
}

export default App;
