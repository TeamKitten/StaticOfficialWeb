import React, { useCallback, useEffect, useState } from 'react';
import { MemberAttributes, MemberMD } from '../../models/Member';
import styles from '../../styles/components/sections/Members.module.css';
import MemberModal from '../MemberModal';

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberMD[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [
    selectedMemberAttr,
    setSelectedMemberAttr,
  ] = useState<MemberAttributes | null>(null);

  useEffect(() => {
    const membersResolver = require.context(
      '../../members/current',
      true,
      /.*\.md/
    );
    setMembers(membersResolver.keys().map((key) => membersResolver(key)));
  }, []);

  const handleMemberClick = useCallback((attr: MemberAttributes) => {
    setSelectedMemberAttr(attr);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>MEMBERS</h1>
      <ul className={styles.members}>
        {members.map((m) => (
          <li
            onClick={() => handleMemberClick(m.attributes)}
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
      <MemberModal
        isOpen={isModalOpen}
        memberAttr={selectedMemberAttr}
        onRequestClose={handleModalClose}
      />
    </section>
  );
};

export default Members;
