import { Router } from 'express'
import { createCart, getAllCarts, getCartById, deleteCart } from '../controllers/CartController'

const router = Router()

router.post('/register', createCart)
router.get('/all', getAllCarts)
router.get('/:cart_id', getCartById)
router.delete('/:cart_id', deleteCart)

export default router
