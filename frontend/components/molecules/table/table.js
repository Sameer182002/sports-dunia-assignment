import styles from "./table.module.css"

export default function CustomTable({
    data = []
}){
    return (
        <div className={styles.mainWrapper}>
            <Row rowData={
                {
                    key1 : 'Team Name',
                    key2 : 'Score',
                    key3 : 'Type',
                    key4 : 'Sports Type',
                    key5 : "Time"
                 }
            }
            customStyle={styles.headerRow}
            />
            {
                data.map((row,index)=> <Row rowData = {row}/>)
            }
        </div>
    )
}


function Row({
    rowData = {},
    customStyle = {}
}){

    console.log(Object.keys({rowData}))
    return (
        <div className={`${styles.row} ${customStyle}`} style={{
            gridTemplateColumns : `repeat(${Object.keys(rowData).length},1fr)`
        }}>
            {
                Object.keys(rowData).map((item,index)=> {
                    return (<p>{rowData[item]}</p>)
                })
            }
        </div>
    )
}