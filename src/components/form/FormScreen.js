
import styles from './FormScreen.module.css';

const FormScreen = () => {
  return <>
    <div className={styles.title}>תשאירי פרטים לשיחת ייעוץ חינמית!</div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="שם"
          name="name"
        />
        <input
          type="tel"
          className={styles.input}
          placeholder="מספר טלפון"
          name="phone"
        />
        <input
          type="email"
          className={styles.input}
          placeholder="מייל"
          name="email"
        />
        <button type="submit" className={styles.button}>
         מחכה לשיחה ממך
        </button>
      </form>
    </div>
 </>
};

export default FormScreen;