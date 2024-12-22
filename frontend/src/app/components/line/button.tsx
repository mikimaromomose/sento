import * as React from "react";
import styles from './button.module.css';
import Image from "next/image";

interface LineButtonProps {
  onLogin?: () => void;
}

const LineButton: React.FC<LineButtonProps> = ({ onLogin }) => {
  return (
    <button
      className={styles.loginButton}
      onClick={onLogin}
      aria-label="Login with LINE"
    >
      <Image
        loading="lazy"
        src="/images/line-button.png"
        className={styles.loginIcon}
        alt="LINE logo"
        width={166}
        height={36}
      />
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.loginText}>LINEでログイン</div>
    </button>
  );
};

export default LineButton;