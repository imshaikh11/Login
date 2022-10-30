import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://shaikh:shaikh@cluster0.5k8q7c5.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParse: true,
   useUnifiedTopology: true
}, () => {
   console.log("DB Connected")
})

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String
})

const User = new mongoose.model("User", userSchema)

//Route
app.post("/login", (req, res) => {
   res.send("MY API Login")
})

app.post("/register", (req, res) => {
   const { name, email, password } = req.body
   User.findOne({ email: email }, (err, user) => {
      if (user) {
         res.send({ message: 'User Already Registered' })
      } else {
         const user = new User({
            name,
            email,
            password
         })
         user.save(err => {
            if (err) {
               res.send(err)
            } else {
               res.send({ message: "Successfully Registered", user })
            }
         })
      }
   })

})

app.listen(5000, () => {
   console.log("BE started at port 5000")
})
