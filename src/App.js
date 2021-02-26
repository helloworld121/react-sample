import './App.css';
import {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./fragment/Header";
import Footer from "./fragment/Footer";
import Stocks from "./Stocks";
import NewStock from "./NewStock";

const App = () => {

    const [stockNames, setStockNames] = useState([]);


    const addStockName = (stockName) => {
        console.log(`addStockname '${stockName}'`);
        setStockNames(prevStockNames => [...prevStockNames, stockName]);
    };

  // to don't blow the DOM we can use the wrapping tag "<></>"
  // "<></>" is equal to "<React.Fragment></React.Fragment>" it is an alias
  return (
      <Router>

          <Header/>

          <main style={{ marginTop: '3rem' }}>
              <div className="container">

                  {/* Switch decides that just one Route is going to be rendered */}
                  <Switch>
                      <Route path="/new" ><NewStock onAddStockName={(stockName) => addStockName(stockName)}></NewStock></Route>
                      <Route path="/" ><Stocks></Stocks></Route>
                  </Switch>

              </div>
          </main>

          <Footer/>

      </Router>
  );
}

export default App;
