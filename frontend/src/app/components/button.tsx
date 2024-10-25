import React from "react";
import styles from './button.module.css';
import Icon from '@mui/icons-material/Search';

export type ButtonProps = {
  icon?: "demo" | ((props: { className: string }) => React.ReactElement) | null;
  theme?: "primary"
        | "secondary"
        | "light"
        | "disabled";
  size?: "slim" | "medium";
  text: string;
  onClick?: () => void;
  width?: string | null;
};

export const Button: React.FC<ButtonProps> = ({
   icon = null,
   theme = "primary",
   size = "medium",
   width = null,
   text,
   onClick = () => {} }: ButtonProps
) => {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${styles[size]} ${icon && styles[`with-icon-${size}`]}`}
      disabled={theme === "disabled"}
      onClick={theme === "disabled" ? undefined : onClick}
      style={width ? { width: width } : undefined}
    >
      {icon && (
        icon === "demo"
          ? <Icon className={`icon-${size}`}/>
          : typeof icon === 'function'
            ? icon({ className: `icon-${size}` })
            : undefined
      )}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};
