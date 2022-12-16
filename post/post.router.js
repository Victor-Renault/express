import { Router } from 'express';
import { getPosts, getSinglePost, createPost, updatePost, removePost } from './post.controller.js'
import { auth } from "../middlewares/auth.middlewares.js"


const router = Router()

router.get('/', getPosts)
/**
 * POST /api/post
 * @summary Create Post
 * @tags Post
 * @param { Post } request.body.required
 * @return { object } 201 - succes reponse
 * @security BearerAuth
 */


router.post('/:id', auth, createPost)

/**
 * Get :api/post/{id}
 * @summary Get one Post
 * @tags Post
 * @param { string }
 */

router.get('/', getSinglePost )


router.put('/', updatePost )

/**
 * Delete /api/post
 * @summary Create POst
 * @tags Post
 * @param { string } id.path.require
 * @security BearerAuth
 */


router.delete('/:id',removePost, auth)




export {
    router as routerPost
}