import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import  Nasa from './Nasa';

const URL = "https://api.nasa.gov/planetary/apod";

const API_KEY = "?api_key=tHiwRhBbKEcrarVQgMikSYVugkHyygZ3ydzQaekZ";

function App() {

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
   

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div className="App">
      <Nasa />
    </div>
  );
}

export default App;
