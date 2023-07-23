import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>主应用app</div>
      <Link to={"/app1"}>react18 子应用</Link>
      <Link to={"/app2"}>vue3 子应用</Link>
      <div id="app1"></div>
      <div id="app2"></div>
    </div>
  );
}

export default App;
