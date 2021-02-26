const Stock = ({stock}) => {
    return (
        <div className="col" key={stock.symbol}>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 fw-normal">{stock.name} ({stock.symbol})</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{stock.lastTradePriceOnly} <small className="text-muted">{stock.currency}</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{stock.lastTradeDate} - {stock.lastTradeTime}</li>
                        <li>{stock.change} - {stock.changeinPercent}</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Stock;
