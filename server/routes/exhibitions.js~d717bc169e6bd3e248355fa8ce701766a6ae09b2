const express = require('express');
const router = express.Router();
const { Exhibition } = require('../models/Exhibition');
const { auth } = require('../middleware/auth');

//전시회 등록
router.post('/register', auth, (req,res)=>{
    const exhibition = new Exhibition(req.body)
    exhibition.user = req.user._id

    exhibition.save((err,exhibition)=>{
        if(err)
            return res.status(400).send(err);
        
        return res.status(200).json({
            registerExhibitionSuccess: true,
            exhibition: exhibition
        })
    })
})

//유저 전시회 리스트업
router.get('/:userId/listUp',(req,res)=>{
    Exhibition.find({user : req.params.userId}, (err,exhibitions)=>{
        if(err){
            console.log('list up exhibition error')
            return res.status(400).send(err);
        }
        return res.status(200).json({
            listUpExhibitionSuccess: true,
            exhibitions: exhibitions
        })
    });

})

//유저 전시회 리스트업
router.post('/near',(req,res)=>{
    Exhibition.find({latitude : {$gte:req.body.minLatitude, $lte: req.body.maxLatitude}, longitude: {$gte:req.body.minLongitude, $lte: req.body.maxLongitude}}, (err,exhibitions)=>{
        if(err){
            console.log('list up exhibition error')
            return res.status(400).send(err);
        }
        return res.status(200).json({
            listUpExhibitionSuccess: true,
            exhibitions: exhibitions
        })
    });

})


//전시회 상세 정보
router.get('/:exhibitionId',(req,res)=>{
    Exhibition.findOne({_id : req.params.exhibitionId},(err, info)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            getExhibitionInfoSuccess: true, 
            info: info
        })
    })
})

//전시회 상세 정보 변경
router.post('/:exhibitionId/edit',(req,res)=>{
    Exhibition.findOneAndUpdate({ _id : req.params.exhibitionId},req.body,(err)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            editExhibitionInfoSuccess:true
        })
    })
})

//전시회 상세 정보 삭제
router.get('/:exhibitionId/delete',(req,res)=>{
    Exhibition.deleteOne({ _id : req.params.exhibitionId},(err)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            deleteExhibitionSuccess:true
        })
    })
})

module.exports = router;