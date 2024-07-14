import jwt from 'jsonwebtoken'
import User from '../models/UserModel'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const { SECRET } = process.env

if (!SECRET) {
    throw new Error('JWT Secret not set')
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if(!email || !password) {
        res.json({ error: 'Credentials missing'})
    }

    const user = await User.findOne({ where: { email } })

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user.user_id }, SECRET, { expiresIn: '1h' })
        res.json({ token })
    } else {
        res.status(401).json({ error: 'Invalid credentials' })
    }
}

export const protect = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'No token provided' })
    }

    jwt.verify(token, SECRET, (err: any) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' })
        }
        next()
    })
}
