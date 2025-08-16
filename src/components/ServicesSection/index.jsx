import React from "react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.containerServices}>
        {/* 1 - Criação de Site */}
        <div className={styles.card}>
          <div className={styles.textArea}>
            <h2>Criação de Site Profissional</h2>
            <p>
              Site profissional é o seu cartão de visita digital que abre portas
              para novas oportunidades todos os dias. Imagine ter uma presença
              online que transmite autoridade, gera confiança imediata e atrai
              clientes antes mesmo deles te conhecerem pessoalmente. Não fique
              para trás enquanto seus concorrentes avançam: invista em um site
              que converte visitantes em clientes reais e coloca sua marca no
              topo!
            </p>
          </div>
          <div className={styles.imageArea}>
            {/* <img src="/laptop-site.png" alt="Criação de Site" /> */}
          </div>
        </div>

        {/* 2 - Gestão de Tráfego Pago */}
        <div className={styles.card}>
          <div className={styles.imageArea}>
            {/* <img src="/phone-ads.png" alt="Gestão de Tráfego Pago" /> */}
          </div>
          <div className={styles.textArea}>
            <h2>Gestão de Tráfego Pago</h2>
            <p>
              Pare de perder dinheiro com anúncios que não funcionam! Com a
              nossa gestão especializada, você chega exatamente onde seu público
              está, no momento certo, multiplicando suas chances de vendas.
              Tenha a tranquilidade de um time de especialistas cuidando para
              que cada real investido gere resultados reais.
            </p>
          </div>
        </div>

        {/* 3 - Combo Premium */}
        <div className={styles.card}>
          <div className={styles.textArea}>
            <h2>Site + Tráfego (Combo Premium)</h2>
            <p>
              Para quem quer dominar o mercado e sair na frente, esse é o pacote
              VIP que transforma seu negócio em uma máquina de atrair clientes.
              Um site poderoso e único, aliado a uma estratégia certeira de
              tráfego pago que gera leads qualificados. Se você está pronto para
              crescer rápido, aumentar seu faturamento e deixar a concorrência
              para trás, esse é o plano que vai fazer acontecer.
            </p>
          </div>
          <div className={styles.imageArea}>
            {/* <img src="/phone-combo.png" alt="Combo Premium" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
