import express from 'express'
import memberControllers from '../controllers/members'

const router = express.Router()

router.get('/member/:id', memberControllers.memberById)

export default router