
import './App.css';
import Counter from './Counter';
import Todo from './Todolist';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="box">
        <h1>React js Application by kt</h1>
        <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Todo">Todo</Link>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
