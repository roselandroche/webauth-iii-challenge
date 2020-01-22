const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
// const restricted middleware

const usersModel = require('./users-model')
// const secrets = require('../data/db-config')

const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
        const saved = await usersModel.add(req.body)

        res.status(201).json(saved)
    }
    catch (err) {
        next(err)
    }
})

// routes

module.exports = router