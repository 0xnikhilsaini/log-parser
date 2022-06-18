import http from 'http'
import express, { Express } from 'express'
import cors from 'cors'
import routes from "./routes/parselog.route"


const app: Express = express();
app.use(cors());
app.use(express.json())

app.use('/',routes)

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 4001;
httpServer.listen(PORT, () => console.log(`Server is running on ${PORT}`));