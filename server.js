const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())


function start() {
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`))
}

module.exports = start