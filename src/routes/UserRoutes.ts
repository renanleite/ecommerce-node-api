import { Router } from 'express'
import { createUser, getAllUsers, getUserById, deleteUser } from '../controllers/UserController'

const router = Router()

router.post('/users', createUser)
router.get('/users', getAllUsers)
router.get('/users/:user_id', getUserById)
// router.put('/users/:user_id', updateUser)
router.delete('/users/:user_id', deleteUser)

export default router
