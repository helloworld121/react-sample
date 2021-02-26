import {useEffect, useState} from "react";
import Stock from "./Stock";

const Stocks = ({stockNames, refreshStocks}) => {

    const[stocks, setStocks] = useState([]);

    useEffect(() => {
        if(stockNames.length > 0) {
            (async () => {
                const response = await fetch('http://localhost:3001/stocks?symbol=' + stockNames.join('&symbol='));
                const data = await response.json();
                setStocks(data);
            })();
        }
    }, [stockNames, refreshStocks]);

    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Overview</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {stocks.map(stock => <Stock stock={stock}/>)}
            </div>
        </>
    );
};

export default Stocks;
