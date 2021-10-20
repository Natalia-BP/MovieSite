import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";

//Alt way of using SVG
//import { ReactComponent as BlueLong } from "../images/TMDB_logo_long.svg";
import ReactDOM from 'react-dom';

function Navbar() {

    /* Viewport size conditional rendering  */
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);
    const updateMedia = () => {
        setDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    /* URL location */
    const location = useLocation();

    return (
        <>
            <header className="main-header mb-3 mb-md-5 p-3 p-md-4 p-lg-5">
                {!isDesktop ? "" : <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"} />}

                <nav className="navbar navbar-expand-md navbar-light">
                    {isDesktop ? "" : <Link className="navbar-brand" to="/">
                        <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"} width="90" />
                    </Link>}

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">

                            <li className={"nav-item " + (location.pathname === "/" ? "active-tab" : "")}>
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/movies" ? "active-tab" : "")}>
                                <Link to="/movies" className="nav-link" >Movies</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/tv-shows" ? "active-tab" : "")}>
                                <Link to="/tv-shows" className="nav-link" >TV Shows</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/people" ? "active-tab" : "")}>
                                <Link to="/people" className="nav-link" >People</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;