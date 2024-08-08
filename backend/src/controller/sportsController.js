const sportsService = require("../service/sportsService")
exports.getUniqueSportsTypes = async(req,res)=>{
    try{
        const {status,code,data,message} = await sportsService.getUniqueSportsTypes()
        return res.status(code || 200).send({status,data,...(message && {message})})
    }catch(error){
        console.log(`Error while fetching the sports type :`,error)
        return res.status(500).send({
            status : false,
            message : `Error while fetching the sports type : ${error?.message}`
        })
    }
}