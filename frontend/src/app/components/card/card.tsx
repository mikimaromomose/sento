import * as React from "react";
import styles from './card.module.css';
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  maxWidth: number;
}

const Card: React.FC<CardProps> = ({ children, maxWidth }) => {
  return (
    <div
      className={styles.container}
      style={{
        maxWidth,
        width: '100%'
      }}
    >
        {children}
    </div>
  );
};

export default Card;