"use client";
import * as React from "react";
import styles from "./headline.module.css";

interface HeadLineProps {
  text: string;
}
function Headline({ text }: HeadLineProps) {
  return (
    <>
      <div className={styles.missionHeader}>{text}</div>
    </>
  );
}

export default Headline;
