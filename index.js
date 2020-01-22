const express = require('express')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use((err, req, res, next) => {
    console.log(`Err:`, err)

    res.status(500).json({ message: `Something went wrong` })
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})