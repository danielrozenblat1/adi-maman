import styles from "./Silabus.module.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScrollReveal from 'scrollreveal';
import Button from "../button/Button";
 export function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion}>
      <Accordion
        expanded={expanded}
        sx={{
       
          width: "100%",
          margin: "auto",
        
          padding:"0.2rem",
          background: "linear-gradient(135deg, rgba(255,227,212,1) 0%, rgba(217,182,146,1) 50%, rgba(255,230,207,1) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
       
        }}
      >
        <AccordionSummary
          expandIcon={!expanded? <AddIcon/>:<RemoveIcon/>}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'Assistant',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
         
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'Assistant'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}



const Silabus1=(props)=>{


return <>
<div className={styles.box}>

<div className={styles.oneDay} >
<DropdownAccordion title={<>
  <div className={styles.day}>לחצי כאן לראות את סילבוס ההשתלמות</div>
</>}content={<>
<div className={styles.description}>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
    הסרה והחלקת הבייס בצורה נכונה שאינה פוגעת בציפורן בטכניקה ממוצעת של כדקה לציפורן
                </span>
              
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
              הכנת הציפורן למשטח עבודה תקין
                </span>
             
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
              טכניקה של מניקור משולב בעזרת שני ראשי מניקור
                </span>
        
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
             גזירת העור ע''י מספריים'

                </span>
            
                </div>
                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
       מבנה אנטומי בטכניקה קלילה שתעזור לך לקצר בזמנים
                </span>
                </div>
           

                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
       מריחת לק ג'ל בצורה מדוייקת לקוטיקולה

                </span>
            
                </div>

                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
מריחת טופ בטכניקה ייחודית שתעלה את רמת גימור העבודה

                </span>
            
                </div>


                <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <span className={styles.description__text}>
ובונוס! - צילום מקצועי ונכון של העבודה + עריכה

                </span>
            
                </div>
</div>

      
  

</>}/>




</div>

</div>
</>
}
export default Silabus1
