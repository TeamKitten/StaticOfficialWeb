import React, { useEffect, useState } from 'react';
import Modal, { Styles as ModalStyles } from 'react-modal';
import { MemberAttributes } from '../models/Member';
import styles from '../styles/MemberModal.module.css';
import resizeMAR from '../utils/resizeMAR';

type Props = {
  onRequestClose: () => void;
  isOpen: boolean;
  memberAttr: MemberAttributes | null;
};

const customStyles: ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
  },
};

const MemberModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  memberAttr,
}: Props) => {
  const [resizedHeight, setResizedHeight] = useState(0);

  useEffect(() => {
    const resized = resizeMAR(512, 288, Math.floor(window.innerWidth));
    console.log(resized.height);
    setResizedHeight(resized.height);
  }, []);

  if (!memberAttr) {
    return null;
  }

  const excerptName = (name: string) => {
    const maxCount = window.innerWidth / 32;
    if (name.length > maxCount) {
      return `${name.substr(0, maxCount)}...`;
    }
    return name;
  };

  const getFullname = () => {
    return `${memberAttr.name}(${memberAttr.role}担当)`;
  };

  return (
    <Modal
      closeTimeoutMS={250}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={memberAttr.name}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <div className={styles.window}>
        <header className={styles.header}>
          <h1 className={styles.title}>{excerptName(getFullname())}</h1>

          <button onClick={onRequestClose} className={styles.close}>
            閉じる
          </button>
        </header>
        <div className={styles.content}>
          <div
            style={{ height: `${resizedHeight}px` }}
            className={styles.coverImageWrapper}
          >
            <img
              src={
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require(`../members/cover_images/${memberAttr.id}.png`).default
              }
              style={{ height: `${resizedHeight}px` }}
              alt={memberAttr.name}
              className={styles.coverImage}
            />
          </div>
          <img
            src={
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              require(`../members/avatar_images/${memberAttr.id}.png`).default
            }
            alt={memberAttr.name}
            className={styles.avatar}
          />
          <div className={styles.meta}>
            <p className={styles.role}>{memberAttr.role}担当</p>
            <p className={styles.name}>{memberAttr.name}</p>
            <p className={styles.bio}>{memberAttr.bio}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MemberModal;
