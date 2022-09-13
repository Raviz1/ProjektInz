import axios from "axios";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { WhiteBox } from "../../components/RoundBox/RoundBox";


import './Register.scss'
export const Register: FC = () => {

    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // TODO check if both mails and passwords are the same check if they are correct then display info

        const payload = {
            login,
            email,
            password
        }
        console.log(payload)
        axios.post('http://localhost:3005/user/createUser/', {
            login,
            email,
            password
        })
        .then((response) => console.log(response))
        .catch((error)=> console.error(error))
    }
    return (
        <div className="register-container">
            <WhiteBox>
                <p>Login:</p>
                <Input onChange={(e) => setLogin(e.target.value.replace(/\s/g, ''))} type={"text"} />
                <p>Email:</p>
                <Input onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))} type={"email"} />
                <p>Confirm Email:</p>
                <Input onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))} type={"email"} />
                <p>Password:</p>
                <Input onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))} type={"password"} />
                <p>Reprat Password:</p>
                <Input onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))} type={"password"} />
                <Button onClick={(e) => { onClick(e) }} text="Register!" />
                <Link to="/login">Masz już konto? Zaloguj się!</Link>
            </WhiteBox>
        </div>
    )
}