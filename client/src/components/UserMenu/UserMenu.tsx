import React, { FC, useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../App"
import { Button } from "../Button/Button"


import './UserMenu.scss'

export const UserMenu: FC = () => {


    const userCtx = useContext(UserContext)
    const logout = () => {
        // remove jwt from localstorage
        localStorage.clear()
        window.location.href = "/"
    }
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="userMenu-container">
            <p>{userCtx.context?.Login}</p>
            <Button text="Logout" onClick={logout} />
            <Button text="Settings" onClick={() => setOpen(!open)} />
            {open && <Dropdown change={(e: any) => setOpen(e)} />}
        </div>
    )
}

interface IDropdownProps {
    change: (e: any) => void
}
const Dropdown: FC<IDropdownProps> = ({ change }) => {
    const ref: any = useRef(null)
    useEffect(() => {

        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                change(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="dropdown-container" ref={ref}>
            <div className="option"><Link to="/account">Konto</Link></div>
            <div className="option"><Link to="/orders">Zamówienia</Link></div>
            <div className="option"><Link to="/history">Historia</Link></div>
        </div>
    )
}