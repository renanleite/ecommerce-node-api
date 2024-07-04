import express, { Application } from 'express'
import bodyParser from 'body-parser'
import UserRoutes from './routes/UserRoutes'
import ProductRoutes from './routes/ProductRoutes'
import CartRoutes from './routes/CartRoutes'
import CartItemRoutes from './routes/CartItemRoutes'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', UserRoutes)
app.use('/api', ProductRoutes)
app.use('/api', CartRoutes)
app.use('/api', CartItemRoutes)

export default app
