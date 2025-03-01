import * as React from "react";
import styles from './page-container.module.css';

interface PageContainerProps {
  children: React.ReactNode;
}

const Card: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div
      className={styles.pageContainer}
      style={{
        width: '100%'
      }}
    >
        {children}
    </div>
  );
};

export default Card;