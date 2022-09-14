
import express from 'express';
import { Request, Response } from 'express';
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { AppDataSource } from "../data-source"
import { User } from '../entity/User';
import { sendMail } from '../assets/SendMail';

const userRepository = AppDataSource.getRepository(User)

export class UserController {


    static createUser = async (req: Request, res: Response) => {
        const { login, email, password } = req.body;
        if (!(login && email && password)) {
            return res.status(400).send({ error: "Data not formatted properly" });
        }
        // new user
        const user = new User();
        user.Login = login;
        user.Email = email;
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(password, salt);
        user.isActive = true;
        const hash = crypto.randomBytes(15).toString('hex');
        user.userHash = hash

        // find if there is one with this email or login 
        const ifUser = userRepository.find({
            where: [
                { Login: login },
                { Email: email },
            ],
        })

        ifUser.then((users) => {
            if (users.length != 0) {
                throw new Error("There already exist user with this login or email")
            }
            const token = jwt.sign(
                { email: email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.Token = token
            userRepository.save(user)


            // console.log(`http://localhost:3005/activate/${hash}`)
            // create a file for 10 minutes
            sendMail(email, `http://localhost:3005/activate/${hash}`)
            res.status(200).send({
                message: "User Created"
            })

        }).catch((reason: Error) => {
            res.status(400).send({ error: reason.message });
        })

    }

    static loginUser = async (req: Request, res: Response) => {
        // Our login logic starts here
        try {
            // Get user input
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }
       
            const user = await userRepository.findOneBy({
                Email: email,
            })

            if (user && (await bcrypt.compare(password, user.Password))) {
                // Create token
                const token = jwt.sign(
                    { email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                user.Token = token
                // save user token
                await userRepository.save(user)

                // user
                res.status(200).json(user);
            }
            res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
        }
        // Our register logic ends here
    }
}