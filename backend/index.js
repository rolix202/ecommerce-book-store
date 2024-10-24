import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import logger from 'morgan'

const app = express()

app.use(logger('dev'))
app.get('/', (req, res) => {
    res.send("Howdy Roland")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    
})