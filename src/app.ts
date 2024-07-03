import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import UserRoutes from './routes/UserRoutes';

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', UserRoutes);

export default app
