import { Request, Response } from 'express'
import CartItem from '../models/CartItemModel'
import Cart from '../models/CartModel'
import Product from '../models/ProductModel'

export const addCartItem = async (req: Request, res: Response) => {
    try {
        const { cart_id, product_id, quantity } = req.body
        const cart = await Cart.findByPk(cart_id)
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' })
        }
        const product = await Product.findByPk(product_id)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        const cartItem = await CartItem.create({
            cart_id,
            product_id,
            quantity,
        })
        res.status(201).json(cartItem)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getAllItemsForACart = async (req: Request, res: Response) => {
    try {
        const cart_id = req.query.cart_id
        if (typeof cart_id !== 'string') {
            return res
                .status(400)
                .json({ error: 'Cart ID invalid or not present' })
        }
        const cartItems = await CartItem.findAll({
            where: { cart_id: cart_id },
        })
        res.status(200).json(cartItems)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getCartItemById = async (req: Request, res: Response) => {
    try {
        const { cart_item_id } = req.params
        const cartItem = await CartItem.findByPk(cart_item_id)
        if (!cartItem) {
            return res.status(404).json({ error: 'Item not found' })
        }
        res.status(200).json(cartItem)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const updateCartItem = async (req: Request, res: Response) => {
    try {
        const { cart_item_id } = req.params
        const { quantity } = req.body
        const cartItem = await CartItem.findByPk(cart_item_id)
        if (!cartItem) {
            return res.status(404).json({ error: 'Item not found' })
        }
        cartItem.quantity = quantity
        await cartItem.save()
        res.status(200).json(cartItem)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const deleteCartItem = async (req: Request, res: Response) => {
    try {
        const { cart_item_id } = req.params
        const cartItem = await CartItem.findByPk(cart_item_id)
        if (!cartItem) {
            return res.status(404).json({ error: 'Item not found' })
        }
        await cartItem.destroy()
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
