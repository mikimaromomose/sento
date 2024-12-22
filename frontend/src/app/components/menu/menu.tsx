import React from 'react';
import styles from './menu.module.css';
import MenuItem from './menu-item';
import Image from 'next/image';

export type MenuItemsProp = {
  id: string;
  label: string;
  isActive?: boolean | undefined;
  isSmall?: boolean | undefined;
  onClick?: () => void;
};

type MenuProps = {
  logo?: boolean;
  items: Array<MenuItemsProp>;
}

const Menu: React.FC<MenuProps> = ({ logo = true, items }) => {
  return (
    <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
      <div className={styles.container}>
        {logo &&
          <header className={styles.logoWrapper}>
            <div className={styles.titleLogo}>
              <Image
                loading="lazy"
                src="/images/logo.png"
                width={190}
                height={24}
                className={styles.logoImage}
                alt="Sento logo"
                onClick={() => location.href = '/'}
              />
            </div>
          </header>
        }
        {items.map((item, index) => (
          <MenuItem
            key={index}
            text={item.label}
            isActive={item.isActive}
            isSmall={item.isSmall}
            onClick={item.onClick}
          />
        ))}
      </div>
    </nav>
  );
};

export default Menu;