
import styles from "./SecondScreen.module.css"


import time from "../icons/wired-gradient-472-hourglass.json"
import learn from "../icons/wired-outline-2507-learn-more-text.json"
import patience from "../icons/wired-outline-629-yoga-male.json"
import Box from "../components/box/Box"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>

    <div className={styles.title}>בואי נדבר תכלס</div>
    <div className={styles.description}>אני לא באה למכור לך הצלחה ברגע</div>
    <div className={styles.description}>את יכולה לקום יום יום ולהתפרנס ממה שאת אוהבת</div>
    <div className={styles.more}>אבל זה דורש ממך 3 דברים</div>
    <div className={styles.row}>
    <Box title="זמן" icon={time} description="המשוואה היא פשוטה - לא תשקיעי זמן - לא תתקדמי ולא תצליחי להגיע לאן שאת מכוונת - התמדה = הצלחה"/>
    <Box title="סבלנות" icon={patience} description="מי שעולה מהר נופל מהר- בשביל לבנות מוניטין יציב ועסק שמגלגל עשרות אלפי שקלים את תצטרכי הרבה סבלנות"/>
    <Box title="למידה ותרגול" icon={learn} description="תמיד יהיה משהו חדש שצריך ללמוד כדי להרחיב את השירות שלנו, תמיד יש לאן להתפתח ותמיד יש לאן לשאוף ובשביל להגיע לכמעט שלמות - את חייבת להיות בלמידה ותרגול כל הזמן"/>
    </div>
    </>
}
export default SecondScreen