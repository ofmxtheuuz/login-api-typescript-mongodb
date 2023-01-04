let user = process.env.DB_USER
let password = process.env.DB_PASS
let secret = process.env.JWT_SECRET

export default {
    port: 3000,
    dbUri: `mongodb+srv://${user}:${password}@cluster0.dqcfam1.mongodb.net/login?retryWrites=true&w=majority`,
    secret: secret
}