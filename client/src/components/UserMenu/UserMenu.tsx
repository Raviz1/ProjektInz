import { FC, useContext } from "react"
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
    return (
        <div className="userMenu-container">
            <p>{userCtx.context?.Login}</p>
            <Button text="Logout" onClick={logout} />

        </div>
    )
}