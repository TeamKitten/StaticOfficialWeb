import React from 'react';
import styles from '../../styles/components/sections/About.module.css';

type Props = React.HTMLProps<HTMLDivElement>;

const About: React.FC<Props> = React.forwardRef((_, ref) => (
  <section className={styles.section} ref={ref}>
    <h1 className={styles.title}>OUR MISSION</h1>
    <p className={styles.text}>
      面白いことは、この世に溢れているはず。
      <br />
      その面白い事を、みんなで共有したい。分かち合いたい。
      <br />
      エンジニア・デザイナーのLT大会をはじめ、楽しいことを追求していきたいと思っています。
      <br />
      当チームは招待制のため、メンバーの方からの招待を受けての加入となります。
    </p>
  </section>
));

About.displayName = 'About';

export default About;
