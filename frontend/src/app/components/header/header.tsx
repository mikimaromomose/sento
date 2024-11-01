import React from 'react';
import styles from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';


interface HeaderProps {
  leftIcon?: "demo" | React.ElementType | null;
  onClickLeftIcon: () => void;
  logo?: boolean;
  rightIconFirst?: "demo" | React.ElementType | null;
  rightIconSecond?: "demo" | React.ElementType | null;
  onClickRightIconSecond: () => void;
}

const Header: React.FC<HeaderProps> = ({
  leftIcon: LeftIcon = "demo",
  logo = true,
  onClickLeftIcon,
  rightIconFirst: RightIconFirst = null,
  rightIconSecond: RightIconSecond = null,
  onClickRightIconSecond,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {LeftIcon && (
          LeftIcon === "demo" ? (
            <MenuIcon className={styles.icon} />
          ) : (
            <LeftIcon className={styles.icon} onClick={onClickLeftIcon} ></LeftIcon>
          )
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
        {RightIconFirst && (
          RightIconFirst === "demo" ? (
            <SearchIcon className={styles.icon} />
          ) : (
            <RightIconFirst className={styles.icon}></RightIconFirst>
          )
        )}
        {RightIconSecond && (
          RightIconSecond === "demo" ? (
            <PersonIcon className={styles.icon} />
          ) : (
            <RightIconSecond className={styles.icon} onClick={onClickRightIconSecond}></RightIconSecond>
          )
        )}
      </div>
    </header>
  );
};

export default Header;