import axios from "./axios";

export default async function getUniqueSports(){
    return await axios.get("/sports/type")
}