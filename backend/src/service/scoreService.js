const scoreModel = require("../model/scoreModel")
const { timeStampToDateAndTime } = require("../utils/helpers")

exports.uploadScore = async(bodyData)=>{
    const {teamName,score,match,scoreType} = bodyData || {}
    const data = await scoreModel.create({
        teamName,
        score,
        match,
        sportType : scoreType
    })
    return {
        status : true,
        code : 201,
        data
    }
}

exports.getScoreDetails = async(queryData = {})=>{
    const {search=''} = queryData || {}

    let searchRegex 
    if(search){
        searchRegex = new RegExp(search, 'i')
    }

    let data = await scoreModel.find({
        isDeleted : false,
        ...(search && {
            sportType : {$regex : searchRegex}
        })
    }).select({
        teamName :1,
        score : 1,
        match : 1,
        sportType : 1,
        _id : 0,
        createdAt : 1
    }).lean()

    if(data?.length){
        data.map((item)=>{
            item.createdAt = timeStampToDateAndTime(item.createdAt)
        })
    }
    return {status:true,code:200,data}
}