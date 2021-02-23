import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const App = () => {
  // mit setName triggered man das rerendern
  const[name, setName] = useState('World');

  // hier wird kein dynamisches Binding verwendet
  setTimeout(() => {
    setName('Peter');
    console.log('Async done');
  }, 1000);

  // JSX => { => aktiviert JavaScript
  return <div>Hello {name + 1}</div>
}

export default App;
