import React from 'react';
import styles from '../../styles/components/sections/Projects.module.css';

const Projects: React.FC = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>PROJECTS</h1>
    <ul className={styles.projects}>
      <li className={styles.project}>
        <img
          className={styles.image}
          src="/projects/notenote.png"
          alt="NoteNote"
          width="auto"
          height="auto"
        />
        <h1 className={styles.name}>NoteNote</h1>
        <h2 className={styles.subtitle}>
          使いやすく、デプロイしやすいノートツール
        </h2>
        <p className={styles.state}>開発中</p>
        <p className={styles.description}>
          A easy to use/deploy notebook system.
          <br />
          オンプレ前提のノートブックプロジェクト。
          <br />
          セットアップは簡単。すぐに使えます。
        </p>
        <a
          className={styles.link}
          href="https://github.com/TeamKitten/NoteNote/"
          rel="noreferrer nooopener"
          target="_blank"
        >
          開発進捗を確認
        </a>
      </li>
    </ul>
  </section>
);

export default Projects;
