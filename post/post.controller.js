import { Post } from "./post.model.js"

export const getAll = async(req, res) => {
    try{
    const posts = await Post.find()
    res.status(200).json(posts)
} catch(err) {
    res.status(400).json({ message: err.message})
    }
}

const getSingle = async (req,res) => {
    try{
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post){
            res.status(404).json(post)
        }
        // ou
        //const post = await Post.findOne({_id: id})
    }catch(err){
        res.status(404).json({ message: err.message})
    }
}

const create = async (req, res) => {
    const { body } = req      // on recup en destructurant pour rename
    try{
        const post = await Post.create(body)
        req.status(201).json(post)
    } catch(err){
        res.status(400).json({ message: err.message })
    }
}

const update = async (req, res) => {
    try{
    const { body  : data, params : { id } } = req
    const post = await Post.findOneAndUpdate({_id: id}, body, {returnOriginal : flase})
    res.status(201).json(post)
    }catch(err){
        res.status(400).json({ message: err.message })
    } 
}

const remove = async (req, res) => {
    try{
        const { id } = req.params
        await Post.deleteOne({_id : id})
        res.status(400).json({message : "user " } + id + " deleted")
    }catch(err){
    res.status(400).json(err.message)
    }
}

export{
    getAll as getPosts,
    getSingle as getSinglePost,
    create as createPost,
    update as updatePost,
    remove as removePost
}