import CountingUp from "../components/count/CountUp"
import Bubble from "../components/shapes/Bubble"
import styles from "./ForthScreen.module.css"
import thirdStep from "../icons/wired-gradient-1596-nails.json"
import firstStep from "../icons/wired-gradient-289-avatar-female-search.json"
import secondStep from "../icons/wired-gradient-1594-manicure.json"
import forthStep from "../icons/wired-gradient-1592-nail-polish.json"
import Button from "../components/button/Button"
import FormScreen from "../components/form/FormScreen"
import certificate from "../images/עדי ממן תעודה לדוגמא.png"
const ForthScreen=()=>{

    return <>
    <div className={styles.title}>וכאן אני נכנסת לתמונה</div>
    <div className={styles.description}>לאחר ש</div>
    <CountingUp/>

    <div className={styles.description}>אני גאה להציג את</div>
    <div className={styles.more}>תכנית הליווי שתוציא אותך אוטוריתה בתחום הציפורניים</div>
    <div className={styles.description}>"אבל עדי , איך התכנית עובדת?"</div>
    <div className={styles.more}>קחי אוויר ושבי..</div>
    <div className={styles.description}>התכנית מתחלקת ל-4 שלבים שבסופן תוכלי לצאת לדרך עצמאית בתחום הציפורניים ולעסוק במקצוע שאת הכי אוהבת</div>
    <div className={styles.row}>
    <Bubble number="1" icon={firstStep} description="מפגש עיוני הכולל את כל התוכן שאת צריכה לדעת בתחום הציפורניים"/>
    <Bubble number="2" icon={secondStep} description="עבודה מעשית הכוללת מבנה אנטומי בשיעור המעשי הראשון"/>

    </div>
    <div className={styles.row}>

    <Bubble number="3"icon={thirdStep} description="עבודה מעשית - עבודה ותרגול"/>
    <Bubble number="4" icon={forthStep} description="שיעור סיום עבודה מעשית הכוללת למידת טכניקה של השלמת ציפורן"/>
    </div>
    <div className={styles.more}>כבר ציינתי ש..?</div>
    <ul className={styles.ul}>
    <li className={styles.li}>הקורס מכיל 20 שעות ליווי שמתחלקות בין 4 מפגשים</li>
    <li className={styles.li}>היחס הוא אישי ! אני מקבלת עד 2 תלמידות בכיתה</li>
    <li className={styles.li}>תקבלי ליווי אישי ומקצועי גם לאחר הקורס!</li>
    <li className={styles.li}>תצאי עם שיעורי בית פרקטיים לאחר כל מפגש</li>
    <li className={styles.li}>תלמדי איך לצלם נכון ליצירת תמונות קטלוג</li>
    <li className={styles.li}>את תצאי מהקורס הזה עם תעודת ההסמכה שתופיע כאן למטה!</li>
    </ul>
    <div className={styles.description}>*כל הזכויות שמורות לעדי ממן*</div>
    <div className={styles.center}><img className={styles.image} src={certificate} alt="עדי ממן  אקדמית בוטיק ללימודי ציפורניים"/></div>
    <FormScreen/>
    </>
}
export default ForthScreen