
import styles from './FormScreen.module.css';
import { useState,useRef } from 'react';
const FormScreen = () => {
    const [submitted ,setSubmitted]=useState(false)
    const nameRef=useRef('')
      const phoneRef=useRef('')
      const emailRef=useRef('')
       const reciver="adimaman100292@gmail.com" 
  
      const submitHandler=async(e)=>{
        e.preventDefault()
        const name=nameRef?.current?.value
        const phone=phoneRef?.current?.value
        const email=emailRef?.current?.value
        if(name.trim().length<=2){
        
        alert("אנא הכנס שם מלא ")
        return;
        }
        if(phone.trim().length!==10){
        
        alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
        return;
            }
            if(!email.includes("@")){
             
                alert("אנא הכנס מייל תקין ")
                return;
                }

       const formData={
        name:name,
        phone:phone,
        email:email,
        
        reciver:reciver
       }
    const response= await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
       })
            
            if(response.ok){
  
            alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
            nameRef.current.value=""
            phoneRef.current.value=""
            emailRef.current.value=""
           setSubmitted(true)
            }
        
    }
  return <>
    <div className={styles.title}>תשאירי פרטים לשיחת ייעוץ חינמית!</div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="שם"
          ref={nameRef}

        />
        <input
          type="tel"
          className={styles.input}
          placeholder="מספר טלפון"
          ref={phoneRef}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="מייל"
          ref={emailRef}
        />
        <button onClick={submitHandler} className={styles.button}>
         מחכה לשיחה ממך
        </button>
      </form>
    </div>
 </>
};

export default FormScreen;