'use client'
import { useEffect, useRef, useState } from "react"
import styles from "./dropdown.module.css"

export default function CustomDropDown({
    options = [],
    depFn = ()=>{}
}){
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [clickedItem, setClickedItem] = useState()
    const wrapperRef = useRef(null)
    let updatedOptions = ["--Select--",...options]
    function handleClick(item){
        if(item == "--Select--"){
            setClickedItem('')
            depFn('')
            return
        }
        setClickedItem(item)
        depFn(item)
    }

    useEffect(()=>{

        function handleOutsideClick(event){
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
        }

        document.addEventListener('click',handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    },[])

    return (
        <div className={styles.mainWrapper}>
            <div 
                className={`${styles.dropDownTextWrapper} ${isDropDownOpen && styles.openDropdownTextWrapper}`} 
                onClick={()=>setIsDropDownOpen(!isDropDownOpen)} 
                ref={wrapperRef}>
                    <p className={!clickedItem ? styles.placeholder : ""} >{clickedItem ? clickedItem : updatedOptions[0]}</p>
                    {isDropDownOpen ? <p>&#9650;</p> : <p>&#9660;</p>}
            </div>
            <div className={`${styles.openDropDown} ${isDropDownOpen && styles.openDropdownOptionsWrapper}`}>
                {
                    updatedOptions.map((opt,index)=>{
                        return (
                            <p onClick={()=>handleClick(opt)} key={index}>
                                {opt}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}