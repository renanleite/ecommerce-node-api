import { Router } from 'express'
import { addCartItem, getAllItemsForACart, getCartItemById, deleteCartItem } from '../controllers/CartItemController'

const router = Router()

router.post('/cart-items', addCartItem)
router.get('/cart-items', getAllItemsForACart)
router.get('/cart-items/:cart_item_id', getCartItemById)
// router.put('/cart-items/:cart_item_id', updateCartItem)
router.delete('/cart-items/:cart_item_id', deleteCartItem)

export default router
