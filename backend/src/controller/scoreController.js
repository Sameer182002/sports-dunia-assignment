const { isValidString, isOnlyDigits } = require("../utils/validators")
const scoreService = require("../service/scoreService")

exports.uploadScore = async(req,res)=>{
    try{
        const {teamName,score,match,scoreType} = req?.body || {}
        if(!isValidString(teamName) || !isValidString(match)){
            return res.status(400).send({
                status : false,
                message : 'Invalid team name or match name'
            })
        }
        if(!isOnlyDigits(score)){
            return res.status(400).send({
                status : false,
                message : 'Invalid score'
            })
        }
        if(!scoreType) return res.status(400).send({
            status : false,
            message : 'Score Type is mandatory'
        })
        const {status, code, data} = await scoreService.uploadScore(req.body)
        return res.status(code).send({
            status,
            data
        })
    }catch(error){
        console.log(`Error while uploading score:`,error)
        return res.status(500).send({
            status : false,
            message : `Error while uploading score: ${error?.message}`
        })
    }
}

exports.getScoreDetails = async(req,res)=>{
    try{

        const {status , code, data, message} = await scoreService.getScoreDetails(req.query)
        return res.status(code || 200).send({
            status,
            data,
            ...(message && {message})
        })
    }catch(error){
        console.log(`Error while fetching the score details :`,error)
        return res.status(500).send({
            status : false,
            message : `Error while fetching the score details : ${error?.message}`
        })
    }
}