import mongoose from "mongoose"
import config from "config"
import * as log from "../src/helpers/message"

async function connect() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)
        log.database("Banco de dados conectado com sucesso!");
    } catch (err: any) {
        log.error(err.message)
    }
}

export default connect;