import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App" >
      <div className="container">
        <header className="App-header">
          The Dictionary
        </header>
        <main>
           <Dictionary />
        </main>
        <footer className="App-footer">
          <div>
          <a href="https://github.com/ashleynmoon/react-weather-app"
            target="_blank"
            rel="noreferrer"
            id="code-link">
      Open-source code
    </a>
    {" "} by Ashley Moon
        </div>
        </footer>
      </div>
    </div>
  );
}


