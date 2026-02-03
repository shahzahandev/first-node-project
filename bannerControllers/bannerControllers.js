 const jwt = require('jsonwebtoken')
 
 let bannerControllers = (req, res) => {
     let token = jwt.sign({data: 'xxxx'}, 'yyyy', {expiresIn: '1h'})
      console.log(token);
      

    let { userName, email, password } = req.body
    console.log(userName, email, password); 

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
    let pass = err.length == 0;
    res.status(pass ? 201 : 400).send({
        success: err.length == 0 ? true : false,
        message: err.length == 0 ? "Login successfully Completed." : "Login Failed.",
        err: err.length == 0 ? null : err
    })
}

module.exports = bannerControllers