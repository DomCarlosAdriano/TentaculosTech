import React from "react";
import Lottie from "lottie-react";
import styles from "./Hero.module.css";
import animationData from "../../assets/animation.json";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>

        <div className={styles.textHero}>
          <p className={styles.subtitle}>Sites que Vendem: Mais Clientes, Mais Faturamento</p>
          <h1 className={styles.title}>
             Precisa de um Site Para Atrair Mais Clientes e Aumente Seu Faturamento?
          </h1>
          <p className={styles.text}>
            Criamos seu site profissional e gerenciamos campanhas de tráfego para atrair clientes qualificados para seu negocio. Sem burocracia e preços acessíveis. Fale conosco e solicite seu orçamento sem compromisso!
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Solicitar Orçamento Gratuito</button>
            <button className={styles.secondaryBtn}>Contact Sales</button>
          </div>
        </div>

        <div className={styles.animationHero}>
          <Lottie animationData={animationData} loop={true} />
        </div>


      </div>
    </section>
  );
}
