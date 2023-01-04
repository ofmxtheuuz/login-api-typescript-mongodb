import c from "config";
import SUser from "../models/SUser"
import TokenService from "./TokenService";
let stoken = new TokenService();

export default class LoginService { 

    async LogIn(email: string, password: string): Promise<boolean | string> {
        const user: any = await SUser.findOne({ email: email, password: password })
        console.log(user)
        if(user == null) {
            return new Promise((done) => {
                done(false);
            })
        } 
        return new Promise((done) => {
            done(stoken.GenerateToken(email, user._id));
        })

    }
    Register(username: string, email: string, password: string): boolean {
        new SUser({
            username: username,
            email: email,
            password: password
        }).save()
        return true;
    }
}