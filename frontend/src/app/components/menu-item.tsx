import React from 'react';
import styles from './menu-item.module.css';

interface MenuItemProps {
  text: string;
  isActive?: boolean;
  isSmall?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, isActive = false, isSmall = false, onClick = () => {} }) => {
  return (
    <div className={styles.menuItemContainer} onClick={onClick}>
      <div className={`${styles.menuItem} ${isActive ? styles.menuItemActive: ''} ${isSmall ? styles.menuItemSmall: ''}`}>
        {text}
      </div>
    </div>

  );
};

export default MenuItem;