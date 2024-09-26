import express, { Express } from "express"
import router from "./routeres/beeperRouter"

// import and load enviroment variables
import "dotenv/config"

const app: Express = express()

app.use(express.json())

app.use("/api/beepers", router)

app.listen(process.env.PORT || 7499, (): void => console.log(`See you at http://localhost:${process.env.PORT || 7499}`))


