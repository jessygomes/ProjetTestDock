import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and here we go !!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commence React
          <span role="img" aria-label="fire">
            🔥
            </span>
        </a>
        <a className="App-link" href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer"> Documentation React</a>
        <a className="App-link" href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer"> React Tutorial</a>
      </header>
    </div>
  );
}

export default App;
