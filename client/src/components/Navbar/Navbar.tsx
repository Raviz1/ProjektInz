import { FC } from "react";
import { Link } from "react-router-dom";

import './Navbar.scss'

export const Navbar: FC = () => {
    return (
        <nav>
            <Link to="/">Optimum Rent</Link> 
            <div>
                <Link to="/login">Login</Link> |{" "}
                <Link to="/register">Register</Link>
            </div>

        </nav>
    )
}