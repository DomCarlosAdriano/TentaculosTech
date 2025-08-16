import React from "react";
import styles from "./Vsl.module.css";

export default function PromoSection() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.overlay}>
        <div className={styles.containerText}>
          <h2 className={styles.title}>
            Coloque seu negócio na frente de mais clientes
          </h2>
          <p>
            Descubra como pequenas empresas estão saindo do anonimato,
            conquistando presença online e atraindo clientes qualificados todos
            os dias aumentando faturamento e autoridade no mercado
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoPlaceholder}>
            <button className={styles.playButton}>▶</button>
          </div>
        </div>
      </div>
    </section>
  );
}
