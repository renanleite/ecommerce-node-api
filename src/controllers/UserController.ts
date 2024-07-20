import { Request, Response } from 'express'
import User from '../models/UserModel'
import bcrypt from 'bcryptjs'

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk(user_id)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        const { username, email, password } = req.body
        const user = await User.findByPk(user_id)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        user.username = username
        user.email = email
        user.password = password
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk(user_id)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        await user.destroy()
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error })
    }
}
