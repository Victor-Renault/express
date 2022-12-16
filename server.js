import express from 'express'
import mongoose from 'mongoose'
import { apiRouter } from './routers/api.router.js'
import config from './config.js'
import { swaggerOptions } from './swagger-options.js'
import expressJsDocSwagger from 'express-jsdoc-swagger'
import cors from 'cors'

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb://localhost:27017`)
        .then(() => console.log('connected to mangoDB'))
        .catch(err => console.log(err))

const app = express()
/**
 * Class User
 * @typedef {object} User
 * @property {string} email.required - email
 * @property {string} password.required - password
 */

app.use(express.json())

app.use(cors({
    "origin": '*',
    "methods": "GET, PUT, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}))

//console.log(swaggerOptions)

app.use('/api', apiRouter)
expressJsDocSwagger(app)(swaggerOptions)

app.listen(3000, console.log('listen ' + config.port))