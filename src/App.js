import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'World';

  // hier wird kein dynamisches Binding verwendet
  setTimeout(() => {
    name = 'Peter';
    console.log('Async done');
  }, 1000);

  // JSX => { => aktiviert JavaScript
  return <div>Hello {name + 1}</div>
}

export default App;
