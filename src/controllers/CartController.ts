import { Request, Response } from 'express'
import Cart from '../models/CartModel'
import User from '../models/UserModel'

export const createCart = async (req: Request, res: Response) => {
  try {
    const user_id  = req.query.user_id as string
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    const cart = await Cart.create({ user_id })
    res.status(201).json(cart)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.findAll()
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getCartById = async (req: Request, res: Response) => {
  try {
    const { cart_id } = req.params
    const cart = await Cart.findByPk(cart_id)
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' })
    }
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// export const updateCart = async (req: Request, res: Response) => {
//   try {
//     const { cart_id } = req.params
//     const { user_id } = req.body
//     const cart = await Cart.findByPk(cart_id)
//     if (!cart) {
//       return res.status(404).json({ error: 'Cart not found' })
//     }
//     cart.user_id = user_id
//     await cart.save()
//     res.status(200).json(cart)
//   } catch (error) {
//     res.status(500).json({ error: error })
//   }
// }

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const { cart_id } = req.params
    const cart = await Cart.findByPk(cart_id)
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' })
    }
    await cart.destroy()
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
