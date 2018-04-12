const jsonwebtoken = require('jsonwebtoken');
module.exports = (req,res,next)=>{
  if(!req.headers.token){
    next({
      message: 'Authentication Fail'
    }) 
  }
  var decode = jsonwebtoken.verify(req.headers.token, 'exampleSecret')
  if(decode.name!=='JsonWebTokenError'){
    req.decoded=decode.users
    next()
  }else{
    next({
      message: 'Authentication Fail'
    })
  }
}