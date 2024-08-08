import axios from "./axios";

export default async function getLiveScores(item){
    console.log({
        item
    })
    return await axios.get(`/live-scores/`,{
        ...(item && {
            params : {search : item}
        })
    })
}