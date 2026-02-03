const jwt = require('jsonwebtoken')

let middleWare = (req, res, next) => {
  jwt.verify(token, 'yyyy', function(err, decoded) {
  console.log(decoded)
  if(!err){
    next();
  } 
});
}

module.exports = middleWare