import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myServer", {
 useNewUrlParse: true,
 useUnifiedTopology: true
}, () => {
 console.log("DB Connected")
})

//Route
app.post("/login", (req, res) => {
 res.send("MY API Login")
})

app.post("/register", (req, res) => {
 res.send("MY API Register")
})

app.listen(5000, () => {
 console.log("BE started at port 5000")
})
