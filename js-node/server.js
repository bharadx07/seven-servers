const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin: "*"
}))


app.get("/", (_,res) => {
    res.send("Hello Unknown Get Requester. Success from the Javascript Server")
})

app.post("/", (req,res) => {
    const name = req.body.name
    res.send(`Hello ${name}. Your are a Post Requester. Success from the Javascript Server`)
})

const PORT = process.env.PORT || 4040

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)) 