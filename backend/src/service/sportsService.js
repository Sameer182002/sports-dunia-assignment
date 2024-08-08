const scoreModel = require("../model/scoreModel")

exports.getUniqueSportsTypes = async()=>{
    const data = await scoreModel.distinct('sportType',{isDeleted:false})
    return {status : true, data , code : 200}
}