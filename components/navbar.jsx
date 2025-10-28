import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="navbar navbar-dark">
            <Link to="/" className="navbar-brand">Listes des produits</Link>
            <div>
                <Link to="/">home</Link>
                <Link to="/card">cart</Link>
            </div>
        </nav>


    )



}