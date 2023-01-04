import * as jwt from "jsonwebtoken"
import config from "config";

export default class TokenService {

    private secret: string;
    constructor() {
        this.secret = config.get<string>("secret")
    }

    GenerateToken(email: string, id: string) {
        return jwt.sign({
            user_email: email,
            user_id: id
        }, this.secret)
    }

    DecodeToken(token: string) {
        return jwt.verify(token, this.secret)
    }
}