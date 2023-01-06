import "./Searchbar.css";
const Searchbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                    <div className="input-group">
                        <div className="input-group-btn search-panel input-group-text">
                            <button
                                id="BoutonRechercher"
                                type="button"
                                className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <span id="search_concept">Catégories</span>{" "}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu scrollable-dropdown" role="menu">
                                <li>
                                    <button className="dropdown-item" type="button">
                                        Automotive Accesories
                                    </button>
                                    {/* <a href="#">Automotive Accesories</a> */}
                                </li>
                                <li>
                                    <a href="#">Cell Phone Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Computer Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Health and Personal Care</a>
                                </li>
                                <li>
                                    <a href="#">Automotive Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Cell Phone Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Computer Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Health and Personal Care</a>
                                </li>
                                <li>
                                    <a href="#">Automotive Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Cell Phone Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Computer Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Health and Personal Care</a>
                                </li>
                                <li>
                                    <a href="#">Automotive Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Cell Phone Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Computer Accesories</a>
                                </li>
                                <li>
                                    <a href="#">Health and Personal Care</a>
                                </li>
                            </ul>
                        </div>
                        <input
                            type="hidden"
                            name="search_param"
                            value="all"
                            id="search_param"
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="x"
                            id="search"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;