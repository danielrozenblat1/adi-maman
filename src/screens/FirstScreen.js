import styles from "./FirstScreen.module.css"
import adi from "../images/עדי ממן.png"

const FirstScreen=()=>{
   

return <>
<div className={styles.description}>אם את רוצה סוף סוף לצאת לעצמאות, לעבוד בעבודה שאת אוהבת ,להיות הבוס של עצמך ולהרוויח בין 10,000-20,000₪ בחודש</div>
<div className={styles.more}>ובשביל זה אני כאן</div>
<div className={styles.center}><img className={styles.image} src={adi} alt="עדי ממן"/></div>
<h1 className={styles.name}>עדי ממן</h1>
<h2 className={styles.what}>אקדמיית בוטיק ללימוד ציפורניים</h2>

</>
}
export default FirstScreen