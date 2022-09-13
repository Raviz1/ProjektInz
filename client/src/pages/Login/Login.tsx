import axios from "axios";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { setAuthToken } from "../../assets/AuthToken";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { WhiteBox } from "../../components/RoundBox/RoundBox";


import './Login.scss'
export const Login: FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // TODO
        axios.post('http://localhost:3005/user/login', {
            email,
            password
        })
            .then((response) => {
                console.log(response.data)
                const token = response.data.Token;
                
                localStorage.setItem("token", token);
                setAuthToken(token);
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="login-container">
            <WhiteBox>
                <p>Email</p>
                <Input onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))} type={"text"} />
                <p>Password</p>
                <Input onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))} type={"password"} />
                <Button onClick={(e) => { onClick(e) }} text="Login!" />
                <Link to="/register">Nie masz konta? Zarejestruj się</Link>
            </WhiteBox>
        </div>
    )
}