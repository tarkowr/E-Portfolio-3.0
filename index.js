require('dotenv').config()
const AWS = require('aws-sdk')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path')
const uuid = require('uuid')
const cors = require('cors')

let app = express()

// Use middleware
app.use(bodyParser.urlencoded({  
    extended: true,
    keepExtensions: true  
}))

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors()) // DISABLE FOR PROD

const aws_config = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
}

const USER_ID_COOKIE = 'userId'

app.get('/rating/get', async (req, res) => {
    let onError = (err) => {
        console.log(err)
        return res.status(500).send(err)
    }

    const userId = req.cookies[USER_ID_COOKIE]

    if (!userId) {
        return res.status(200).json({})
    }

    const docClient = new AWS.DynamoDB.DocumentClient()

    const params = {
        TableName: process.env.AWS_TABLE_NAME,
        Key: {
            'id': userId
        }
    }

    docClient.get(params, (err, data) => {
        if (err) {
            onError(err)
        }

        return res.status(200).json(data.Item || data)
    })
})

app.post('/rating/add', async (req, res) => {
    const MIN_RATING = 1
    const MAX_RATING = 5

    let rating = req.body.rating

    let onError = (err) => {
        console.log(err)
        return res.status(500).send(err)
    }

    let userId = req.cookies[USER_ID_COOKIE]

    if (userId) {
        return res.status(200).send()
    }

    rating = parseInt(rating)

    if (isNaN(rating) || rating < MIN_RATING || rating > MAX_RATING) {
        return res.status(200).send()
    }

    userId = uuid.v4()
    res.cookie(USER_ID_COOKIE, userId)

    const docClient = new AWS.DynamoDB.DocumentClient()

    const ratingItem = {
        id: userId,
        rating: rating
    }

    const params = {
        TableName: process.env.AWS_TABLE_NAME,
        Item: ratingItem
    }

    docClient.put(params, (err, data) => {
        if (err) {
            onError(err)
        }
        
        return res.status(200).send()
    })
})

app.use(express.static('build'))
app.use(express.static('public'))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3200
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
    AWS.config.update(aws_config)
})