import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const { DB_URI} = process.env

if(!DB_URI){
    throw new Error('Database URI not set')
}

export const sequelize =  new Sequelize(DB_URI)
