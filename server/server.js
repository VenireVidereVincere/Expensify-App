var express = require('express')
var app = express()
let path = require('path')
const publicPath = path.join(__dirname,"..", "public")

app.use(express.static(publicPath))

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath,"index.html"))
})

app.listen(3000, () => {
    console.log("server is up on port 3000.")
})