import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { UserMenu } from "../UserMenu/UserMenu";

import './Navbar.scss'

export const Navbar: FC = () => {
    const userCtx = useContext(UserContext)
    return (
        <nav>
            <Link to="/">Optimum Rent</Link>
            {
                userCtx.context ? <UserMenu /> : <NavLinks />
            }

        </nav>
    )
}

const NavLinks: FC = () => {
    return (<div>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
    </div>)

}