import express, {Request, Response, NextFunction } from "express" 
import LoginService from "../services/AuthService";
import TokenService from "../services/TokenService";

let stoken = new TokenService();
let sauth = new LoginService();

import * as jwt from "jsonwebtoken";

export async function Login(req: Request, res: Response) {
    // Login Service
    sauth.LogIn(req.body.email, req.body.password).then((value) => {
        if(typeof value == "string") {
            res.status(200).send({
                code: 200,
                status: "approved",
                token: value
            })
        } else {
            res.status(401).send({
                code: 401,
                status: "rejected",
            })
        }
    })
}

export async function Register(req: Request, res: Response) {
    // Register Service
    let result: boolean = sauth.Register(req.body.username, req.body.email, req.body.password);
    if(result) {
        res.status(201).send({
            code: 201,
            status: "created"
        })
    } else {
        res.status(400).send({
            code: 400,
            status: "failed"
        })
    }
}

export function GetJWT(req: Request, res: Response){
    try { 
        let jwt: string | jwt.JwtPayload = stoken.DecodeToken(req.body.token);
        res.status(200).send({
            code: 200,
            status: "approved",
            content: jwt
        });
    }catch(e) {
        res.status(500).send({
            code: 500,
            status: "invalid token"
        })
    }
}
