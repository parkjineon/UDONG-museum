const { User } = require('../models/User')

let auth = function(req,res,next){
    let token = req.cookies.x_auth

    User.findByToken(token,(err, user)=>{
        if(err) return res.status(400).send(err)
        if(!user) return res.json({isAuth: false, message:'허가되지 않은 사용자입니다.'})
        
        req.token = token;
        req.user = user;
        req.currentUser = true;
        next()
    })  

}

module.exports = { auth }