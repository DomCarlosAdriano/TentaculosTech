import React from "react";
import styles from "./CommunitySection.module.css";

const CommunitySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join the community today</h2>
        <p className={styles.subtitle}>
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. 
          Neque pellentesque donec et tellus ac varius tortor, bibendum. 
          Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>
        <a href="#signup" className={styles.button}>
          Sign Up Free →
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
