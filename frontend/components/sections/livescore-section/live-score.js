'use client'
import CustomDropDown from "@/components/molecules/dropdown/dropdown";
import styles from './live-score.module.css'
import { useEffect, useRef, useState } from "react";
import getLiveScores from "@/apis/getScores";
import CustomTable from "@/components/molecules/table/table";
import getUniqueSports from "@/apis/getUniqueSportsTypes";


export default function LiveScoreSection(){
    const [scoresData, setScoresData] = useState([])
    const [sportTypes, setSportTypes] = useState([])

    useEffect(()=>{
        getScores()
        getUniqueScore()
    },[])

    async function getScores(item){
        try{
            const data = await getLiveScores(item)
            setScoresData(data)
        }catch(error){
            console.log(error)
        }
    }

    async function getUniqueScore(){
        try{
            const data = await getUniqueSports()
            setSportTypes(data)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.filterWrapper}>
                <CustomDropDown options = {sportTypes} depFn={getScores}/>
            </div>
            <div className={styles.table}>
                <CustomTable data = {scoresData} />
            </div>

        </div>
    )
}