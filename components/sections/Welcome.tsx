import React from 'react';
import styles from '../../styles/components/sections/Welcome.module.css';
import TK from '../../assets/tinykitten.svg';
import Arrow from '../../assets/arrow.svg';

type Props = {
  onArrowPress: () => void;
};

const Welcome: React.FC<Props> = ({ onArrowPress }: Props) => (
  <section className={styles.section}>
    <TK width={120} />
    <h1 className={styles.title}>TeamKitten</h1>
    <p className={styles.subtitle}>
      「面白い」ことをしたい人が集まる
      <br />
      コミュニティです。
    </p>
    <Arrow className={styles.arrowLink} onClick={onArrowPress} />
  </section>
);

export default Welcome;
