import React from "react";
import styles from "./ProcessoContratacao.module.css";
import { FiTruck, FiAward, FiUsers, FiTarget } from "react-icons/fi";

const ProcessoContratacao = () => {
  return (
    <section className={styles.container}>
      <p className={styles.service}>Service</p>
      <h2 className={styles.title}>Processo de Contratação</h2>
      <p className={styles.subtitle}>
        Veja como é simples dar o próximo passo para impulsionar sua presença
        online e atrair mais clientes.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <FiTruck className={styles.icon} />
          <h3>Solicitação de Orçamento</h3>
          <p>
            Entre em contato e conte o que você precisa: criação de site, gestão
            de tráfego pago ou nosso plano premium. Em poucas horas você recebe
            uma proposta personalizada e transparente.
          </p>
        </div>

        <div className={styles.card}>
          <FiAward className={styles.icon} />
          <h3>Elaboração do Contrato</h3>
          <p>
            Após aprovar a proposta, formalizamos tudo para sua segurança. Você
            recebe um contrato claro, com prazos, valores e garantias definidas.
          </p>
        </div>

        <div className={styles.card}>
          <FiUsers className={styles.icon} />
          <h3>Criação e Entrega</h3>
          <p>
            Colocamos a mão na massa! Criamos seu site profissional e/ou
            configuramos suas campanhas de tráfego pago, sempre mantendo você
            atualizado sobre o andamento.
          </p>
        </div>

        <div className={styles.card}>
          <FiTarget className={styles.icon} />
          <h3>Sucesso</h3>
          <p>
            Com seu projeto no ar e campanhas rodando, você começa a atrair
            visitantes qualificados e gerar mais resultados para o seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessoContratacao;
