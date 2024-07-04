import { Router } from 'express';
import { createCart, getAllCarts, getCartById, deleteCart } from '../controllers/CartController';

const router = Router();

router.post('/carts', createCart);
router.get('/carts', getAllCarts);
router.get('/carts/:cart_id', getCartById);
router.delete('/carts/:cart_id', deleteCart);

export default router;
