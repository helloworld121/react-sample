import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {
  // setName triggers re-rendering => like change detection => there is no other possibility
  // useState creates a local component-state
  const[name, setName] = useState('World');

  // lifecycle-hook => compared to NgOnInit
  // the rendering process consists out of two steps => pre-commit, commit
  useEffect(() => {
    setTimeout(() => {
      setName('Peter');
      console.log('Async done');
    }, 1000);
  }, []); // the array displays the dependencies



  // JSX => "{}" => activates JavaScript
  return <div>Hello {name + 'static'}</div>
}

export default App;
