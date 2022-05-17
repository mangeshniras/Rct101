import React from "react";

import {useState} from 'react';
import styles from './Counter.module.css'

function Counter(){
    const [state,setState] = useState("")
    const [count,setCount]= useState(0)

    const handleInc = (prevState)=>{
        setCount((prevState)=>prevState+1)

    }
    const handleDec = (prevState)=>{
        setCount((prevState)=>prevState-1)

    }

    const handleDbl = (prevState)=>{
        setCount((prevState)=>prevState*2)
    }
    if(count%2===1){
        return(
        <>
        <div className={styles.center}>
        <h1 className={styles.red}>{count}</h1>
         <div className={styles.look}>
        <button onClick={()=>handleInc()}>Inc</button>
        <button onClick={()=>handleDec()}>Dec</button>
        <button onClick={()=>handleDbl()}>Double</button>
        </div>
        </div>
        </>
    )
    }
    else{
        return(
        <>
        <div className={styles.center}>
        <h1 className={styles.green}>{count}</h1>
        <div className={styles.look}>
        <button onClick={()=>handleInc()}>Inc</button>
        <button onClick={()=>handleDec()}>Dec</button>
        <button onClick={()=>handleDbl()}>Double</button>
        </div>
        </div>
        </>
    )
    }
    
}

export default Counter