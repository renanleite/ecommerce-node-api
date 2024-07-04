import { Request, Response } from 'express'
import Product from '../models/ProductModel'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock_quantity } = req.body
    const product = await Product.create({ name, description, price, stock_quantity })
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params
    const product = await Product.findByPk(product_id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const { product_id } = req.params
//     const { name, description, price, stock_quantity } = req.body
//     const product = await Product.findByPk(product_id)
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' })
//     }
//     product.name = name
//     product.description = description
//     product.price = price
//     product.stock_quantity = stock_quantity
//     await product.save()
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({ error: error })
//   }
// }

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params
    const product = await Product.findByPk(product_id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    await product.destroy()
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
