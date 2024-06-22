import Silabus1 from "../components/silabus/Silabus1"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
 <div className={styles.description}>כבר עברת קורס בתחום?</div>
 <div className={styles.title}>זה לא אומר שדרכינו נפרדות!</div>
 <div className={styles.more}>הכירי את ההשתלמות</div>
 <Silabus1/>
</>


}
export default ThirdScreen