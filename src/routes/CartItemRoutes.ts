import { Router } from 'express'
import {
    addCartItem,
    getAllItemsForACart,
    getCartItemById,
    updateCartItem,
    deleteCartItem,
} from '../controllers/CartItemController'

const router = Router()

router.post('/register', addCartItem)
router.get('/all', getAllItemsForACart)
router.get('/:cart_item_id', getCartItemById)
router.put('/:cart_item_id', updateCartItem)
router.delete('/:cart_item_id', deleteCartItem)

export default router
