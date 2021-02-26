import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Broker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Aktualisieren</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new">Hinzufügen</Link>
                            </li>
                        </ul>
                        {/*<form className="d-flex">*/}
                        {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">*/}
                        {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </nav>
        </header>
        // <header
        //     className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        //     <p className="h5 my-0 me-md-auto fw-normal">Broker</p>
        //     <nav className="my-2 my-md-0 me-md-3">
        //         <a className="p-2 text-dark" href="#">Aktualisieren</a>
        //         <Link to="/new" className="p-2 text-dark">Hinzufügen</Link>
        //     </nav>
        // </header>
    );
};

export default Header;
