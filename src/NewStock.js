import {useState} from 'react';
import {useHistory} from "react-router-dom";

const NewStock = ({onAddStockName}) => {
    const [stockName, setStockName] = useState('');

    const history = useHistory();

    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">New Stock</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-1 mb-1 text-center">
                <div className="col">
                    <div className="card p-2">
                    {/*<form className="card p-2">*/}
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Stock"
                                value={stockName}
                                onChange={event => setStockName(event.currentTarget.value)}/>
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                onClick={() => {
                                    onAddStockName(stockName);
                                    history.push('/');
                                }}>Add</button>
                        </div>
                    {/*</form>*/}
                    </div>
                    {/*<div className="card mb-4 shadow-sm">*/}
                        {/*<div className="card-header">*/}
                        {/*    <h4 className="my-0 fw-normal">Free</h4>*/}
                        {/*</div>*/}
                        {/*<div className="card-body">*/}
                        {/*    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/*/}
                        {/*        mo</small></h1>*/}
                        {/*    <ul className="list-unstyled mt-3 mb-4">*/}
                        {/*        <li>10 users included</li>*/}
                        {/*        <li>2 GB of storage</li>*/}
                        {/*        <li>Email support</li>*/}
                        {/*        <li>Help center access</li>*/}
                        {/*    </ul>*/}
                        {/*    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default NewStock;
