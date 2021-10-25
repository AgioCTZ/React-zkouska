import logo from './imgs/tf.png';
import './App.css';
import Title from './components/Title';
import Ajaja from './components/ajaja';

function App() {
  return (
    <div className="App">
      <div className="Title">
      <Title />
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Běž se naučit React, já bych měl taky
        </a>
      </header>
      

      <div className="ajaja">
      <Ajaja />
      </div>
    </div>
  );
}

export default App;
