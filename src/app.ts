import express, { Application } from 'express'
import bodyParser from 'body-parser'
import UserRoutes from './routes/UserRoutes'
import ProductRoutes from './routes/ProductRoutes'
import CartRoutes from './routes/CartRoutes'
import CartItemRoutes from './routes/CartItemRoutes'
import AuthRoutes from './routes/AuthRoutes'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(AuthRoutes)
app.use('/user', UserRoutes)
app.use('/product', ProductRoutes)
app.use('/cart', CartRoutes)
app.use('/cart_item', CartItemRoutes)

export default app
