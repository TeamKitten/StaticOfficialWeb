import React from 'react';
import styles from '../../styles/components/sections/Events.module.css';

const Events: React.FC = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>EVENTS</h1>
    <ul className={styles.events}>
      <li className={styles.event}>
        <img
          className={styles.image}
          src="/events/kittenlt2.png"
          alt="KittenLT2"
          width="auto"
          height="auto"
        />
        <h1 className={styles.name}>KittenLT2</h1>
        <h2 className={styles.subtitle}>
          面白いことは、まだこの世にあふれている。
        </h2>
        <p className={styles.state}>ご来場ありがとうございました</p>
        <p className={styles.description}>
          KittenLTは、LTスタイルの勉強会です。
          <br />
          皆さんが気軽に話題を持ち寄って、発表できるような場を作りたい。
          <br />
          そういった信念で開催されることになりました 。<br />
          面白いことは、この世にあふれているはずです。
        </p>
        <a
          className={styles.link}
          href="https://lt.teamkitten.tk/"
          rel="noreferrer nooopener"
          target="_blank"
        >
          公式サイトへ
        </a>
      </li>
    </ul>
  </section>
);

export default Events;
