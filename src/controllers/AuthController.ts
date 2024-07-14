import jwt from 'jsonwebtoken'
import User from '../models/UserModel'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

const secret = 'your_jwt_secret'

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user.user_id }, secret, { expiresIn: '1h' })
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

    jwt.verify(token, secret, (err: any) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' })
        }
        next()
    })
}
