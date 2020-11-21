import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/sections/Members.module.css';

const Members: React.FC = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const membersResolver = require.context(
      '../../members/current',
      true,
      /.*\.md/
    );
    setMembers(membersResolver.keys().map((key) => membersResolver(key)));
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>MEMBERS</h1>
      <ul className={styles.members}>
        {members.map((m) => (
          <li
            // @click="handleMemberClick(m)"
            className={styles.member}
            key={m.attributes.code}
          >
            <img
              src={
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require(`../../members/avatar_images/${m.attributes.id}.png`)
                  .default
              }
              className={styles.avatar}
              alt={m.attributes.name}
            />
            <p className={styles.role}>{m.attributes.role}担当</p>
            <p className={styles.name}>{m.attributes.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Members;
