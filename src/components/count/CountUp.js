import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 
      <div className={styles.font} >
        {inView && <CountUp end={1000} duration={5.5} />}
        <div className={styles.explain}>לקוחות עברו תחתי</div>
      </div>
      
      <div className={styles.font}>
        {inView && <CountUp end={120} duration={6.5} />}
        <div className={styles.explain}>תלמידות שעברו את הליווי שלי</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={50} duration={5} />}
        <div className={styles.explain}>נייליסטיות שעברו השתלמות אצלי</div>
      </div>
    </div>
  );
};

export default CountingUp;