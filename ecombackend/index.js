import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4002
const URI = process.env.MongoDBURI

//connect to mongoDB

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to MongoDB')
} catch (error) {
  console.log('Error connecting to MongoDB:', error)
}

// Defing routes
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
app.use('/book', bookRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
