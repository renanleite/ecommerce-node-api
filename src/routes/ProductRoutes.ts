import { Router } from 'express'
import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from '../controllers/ProductController'

const router = Router()

router.post('/register', createProduct)
router.get('/all', getAllProducts)
router.get('/:product_id', getProductById)
router.put('/:product_id', updateProduct)
router.delete('/:product_id', deleteProduct)

export default router
