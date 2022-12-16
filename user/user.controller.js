import { User } from "./user.model"
import bcrypt from 'bcrypt'
import { jwt } from "jsonwebtoken"
import config from '../config.js'


export const login = async (res,res) => {
    try{
        const { body } = req
        const user = await User.findOne({email: body.email})
        if(!user){
            res.status(404).json({message: 'user does not existe'})
        }
        if (await bcrypt.compare(body.password, user.password)){
            if(config.secret){
            const token = await jwt.sign({userId : user.id}, config.secret, {expires: '24H'})
            res.staus(200).json({token})
        } else {
        res.staus(500).json({ message: "no secret for the token"})
        }
    }else{
            res.staus(401).json({message: err.message})
    }
    }catch(err){
        res.staus(404).json({ message: "wrong password"})
    }
}    


const register = async (req, res) => {
    try{
        const { body } = req
        const hash = await bcrypt.hash(body.password, 10)
        body.password = hash
        await User.create(body)
        res.status(201).json({message: "user creted"})
    }catch(err){
        res.staus(400).json({message: err.message})
    }
}

