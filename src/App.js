import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Item from './Item';

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
  // to don't blow the DOM we can use the wrapping tag "<></>"
  // "<></>" is equal to "<React.Fragment></React.Fragment>" it is an alias
  return (
      <>
        <div>Hello {name + 'static'}</div>
        <Item />
      </>
  );
}

export default App;
