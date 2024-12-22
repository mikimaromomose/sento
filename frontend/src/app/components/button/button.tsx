import React from "react";
import styles from './button.module.css';
import SearchIcon from '@mui/icons-material/Search';

export type ButtonProps = {
  icon?: "demo" | React.ElementType | null;
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
   icon: Icon = null,
   theme = "primary",
   size = "medium",
   width = null,
   text,
   onClick = () => {} }: ButtonProps
) => {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${styles[size]} ${Icon && styles[`with-icon-${size}`]}`}
      disabled={theme === "disabled"}
      onClick={theme === "disabled" ? undefined : onClick}
      style={width ? { width: width } : undefined}
    >
      {Icon && (
        Icon === "demo"
          ? <SearchIcon className={`icon-${size}`}/>
          : <Icon className={`icon-${size}` } />
      )}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};
