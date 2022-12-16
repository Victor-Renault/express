import { Router } from 'express';
import { login, register } from './user.controller.js'

const router = Router()
/**
 * POST /auth/login
 * @summary login user
 * @tags Auth
 * @param { User } request.body.required - User
 * @return { object } 200 - success response
 */

router.post('/login', login)
/**
 * POST /auth/login
 * @summary register
 * @tags Auth
 * @param { User } request.body.required - User
 * @return { object } 200 - success response
 */



router.post('/register', register)

export{
    router as routerApi
}