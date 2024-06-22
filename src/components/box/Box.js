import { useEffect, useRef } from "react";
import styles from "./Box.module.css"
import { Player } from "@lordicon/react";
const Box=(props)=>{
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])
return <>
<div className={styles.box}>
        <div className={styles.title}>{props.title}</div>
     <div className={styles.icon}><Player icon={props.icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player></div>  
        <div className={styles.description}>{props.description}</div>
    </div>
</>

}
export default Box