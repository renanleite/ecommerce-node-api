import { Router } from 'express'
import { createUser, getAllUsers, getUserById, deleteUser, updateUser } from '../controllers/UserController'
import { protect } from '../controllers/AuthController'


const router = Router()

router.post('/register', createUser)
router.get('/all', protect, getAllUsers)
router.get('/:user_id', protect, getUserById)
router.put('/:user_id', protect, updateUser)
router.delete('/:user_id', protect, deleteUser)

export default router
