// Libraries
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fixed Components
import Navbar from './comps_fijos/Navbar';
import Footer from './comps_fijos/Footer';

// Switch Components
import PopFilms from "./comps/PopFilms";

function Layout() {



    return (
        <Router>
            <Navbar />
            <div className="container-fluid px-4">
                <Switch>

                    {/* ###### Views ###### */}
                    {/* Home */}
                    <Route path="/">
                        <PopFilms />
                    </Route>
                    
                    {/* Individual Movie Interface */}
                    <Route path="/movie/:id">
                        
                    </Route>



                </Switch>
            </div>

            <Footer />
        </Router>
    );
}

export default Layout;