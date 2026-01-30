const express = require('express')
const app = express()
app.use(express.json())

app.get('/banner', (req, res) => {
    let { userName, email, password } = req.body
    // console.log(userName, email, password); 

    let err = []

    if (!userName) {             //username err
        err.push({
            errType: "userName",
            message: "userName Required."
        })
    }
    if (!email) {                //email err
        err.push({
            errType: "email",
            message: "email Required."
        })
    }
    if (!password) {             //password err
        err.push({
            errType: "password",
            message: "password Required."
        })
    }
    res.send({
        success: err.length == 0 ? true : false,
        message: err.length == 0 ? "Login successfully Completed." : "Login Failed.",
        err: err.length == 0 ? null : err
    })
})

app.listen(8000, () => {
    console.log("The server running.........");
})







