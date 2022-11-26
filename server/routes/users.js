const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

//회원가입
router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      //비밀번호 5자리 미만
      if (req.body.password.length <= 5)
        return res.json({
          registerSuccess: false,
          message: "비밀번호를 5자리 이상으로 설정하십시오.",
        });
      //이메일 주소 중복
      if (err.code === 11000) {
        return res.json({
          registerSuccess: false,
          message: "이메일 주소가 이미 사용 중입니다.",
        });
      }
      return res.status(400).send(err);
    }

    return res.status(200).json({
      registerSuccess: true,
      email: user.email,
      password: user.password,
    });
  });
});

//로그인
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "등록되지 않은 이메일 주소입니다.",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(400).send(err);
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token);
        return res
          .status(200)
          .json({ loginSuccess: true, message: "로그인 성공!" });
      });
    });
  });
});

//인증
//role 1 어드민 role 2 특정 부서 어드민
//role 0 일반유저 role 0이 아니면 관리자
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
    location: req.user.location,
    description: req.user.description,
    following: req.user.following,
  });
});

//로그아웃
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.status(400).send(err);
    res.cookie("x_auth", "");
    return res.status(200).json({ logoutSuccess: true, user: user });
  });
});

//유저 상세 정보
router.get("/:userId", (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, info) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).json({
      getUserInfoSuccess: true,
      email: info.email,
      name: info.name,
      role: info.role,
      image: info.image,
      location: info.location,
      description: info.description,
      following: info.following,
    });
  });
});

//유저 팔로우
router.get("/:userId/follow", auth, (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, info) => {
    if (err) {
      return res.status(400).send(err);
    }

//유저 팔로우
router.get('/:userId/follow', auth, (req,res)=>{
    User.findOne({ _id : req.params.userId},(err, info)=>{
        if(err){
            return res.status(400).send(err);
        }
        
        User.updateOne({ _id : req.user._id},{ $addToSet: { following: info.email } },(err)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).json({
                followUserSuccess:true
            })
        })
    })
})

//유저 언팔로우
router.get('/:userId/unfollow', auth, (req,res)=>{
    User.findOne({_id : req.params.userId},(err, info)=>{
        if(err){
            return res.status(400).send(err);
        }
        
        User.updateOne({ _id : req.user._id},{ $pull: { following: info.email } },(err)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).json({
                unfollowUserSuccess:true
            })
        })
    })
})

//내 정보 가져오기
router.get('/mine/show',auth,(req,res)=>{
    res.status(200).json({
        _id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
        location: req.user.location,
        description: req.user.description,
        following: req.user.following
    })
})

//내 정보 수정하기
router.post('/mine/edit',auth,(req,res)=>{
    User.findOneAndUpdate({ _id : req.user._id},req.body,(err)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            editEditMyInfoSuccess:true
        })
    })
})


module.exports = router;
