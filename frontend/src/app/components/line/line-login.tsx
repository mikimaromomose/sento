"use client";
import * as React from "react";
import styles from "./line-login.module.css";
import LineLoginButton from "@/app/components/line/button";
import { Checkbox } from "@/app/components/checkbox/checkbox";

interface LineLoginProps {
  onClick: () => void
}

function LineLogin({ onClick }: LineLoginProps) {
  const [check, setCheck] = React.useState(false);
  return (
    <>
      <section className={styles.container}>
        <p className={styles.message}>
          <span>LINEで登録すると、</span>
          <br />
          <span>様々な特典がご利用いただけます。</span>
        </p>
        <div className={styles.checkboxContainer}>

          <div className={styles.termsText}>
            <Checkbox checked={check} onChange={setCheck} />
            <a href="#" className={styles.termsLink}>
              利用規約
            </a>
            <span>に同意する</span>
          </div>
          <LineLoginButton onLogin={onClick} />
        </div>
      </section>
    </>
  );
}

export default LineLogin;
