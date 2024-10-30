import React from 'react';
import styles from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

interface HeaderProps {
  leftIcon?: "demo" | ((props: { className: string }) => React.ReactElement) | null;
  logo: boolean;
  rightIconFirst?: "demo" | ((props: { className: string }) => React.ReactElement) | null;
  rightIconSecond?: "demo" | ((props: { className: string }) => React.ReactElement) | null;
}

const Header: React.FC<HeaderProps> = ({
  leftIcon = "demo",
  logo = true,
  rightIconFirst = null,
  rightIconSecond = null
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {leftIcon && (
          leftIcon === "demo" ? (
            <MenuIcon className={styles.icon} />
          ) : typeof leftIcon === 'function' ? (
            leftIcon({ className: styles.icon })
          ) : null
        )}
        {logo && (
          <div className={styles.titleLogo}>
            <Image
              src="/images/logo.png"
              alt="Sento Logo"
              width={190}
              height={24}
              className={styles.titleLogo}
              onClick={() => window.location.href='/' }
            />
          </div>
        )}
      </div>
      <div className={styles.userSection}>
        {rightIconFirst && (
          rightIconFirst === "demo" ? (
            <SearchIcon className={styles.icon} />
          ) : typeof leftIcon === 'function' ? (
            rightIconFirst({ className: styles.icon })
          ) : null
        )}
        {rightIconSecond && (
          rightIconSecond === "demo" ? (
            <PersonIcon className={styles.icon} />
          ) : typeof leftIcon === 'function' ? (
            rightIconSecond({ className: styles.icon })
          ) : null
        )}
      </div>
    </header>
  );
};

export default Header;