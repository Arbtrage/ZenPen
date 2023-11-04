import express, { Express } from 'express'
import cors from 'cors'
import { setupRoutes } from './routes/index';
import * as dotenv from 'dotenv'
dotenv.config()

const app: Express = express();

//Defining Middleware
app.use(express.json());
app.use(cors());


//Defining Routes
setupRoutes(app);


const port = process.env.PORT as string || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})