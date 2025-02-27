import React from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className={styles.checkboxContainer}
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <div className={styles.checkboxInput}>
        {checked && <div className={styles.checkboxCheck} />}
      </div>
    </div>
  );
};