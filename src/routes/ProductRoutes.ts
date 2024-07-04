import { Router } from 'express'
import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from '../controllers/ProductController'

const router = Router()

router.post('/products', createProduct)
router.get('/products', getAllProducts)
router.get('/products/:product_id', getProductById)
router.put('/products/:product_id', updateProduct)
router.delete('/products/:product_id', deleteProduct)

export default router
