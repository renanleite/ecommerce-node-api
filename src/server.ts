import app from './app'
import dotenv from 'dotenv'
import { sequelize } from './database/connection'

dotenv.config()

const PORT = process.env.PORT

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

// sequelize.sync()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))