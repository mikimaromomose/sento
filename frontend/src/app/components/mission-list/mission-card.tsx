"use client";

import React from "react";
import styles from "./mission-card.module.css";
import StarIcon from "@/app/components/icon/star-icon";
import { Button } from "../button/button";

interface MissionCardProps {
  title: string;
  description: string;
  showStar?: boolean;
  onChallengeClick?: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  showStar = true,
  onChallengeClick,
}) => {
  return (
    <article className={styles.missionCard}>
      <header className={styles.missionHeader}>
        <h3 className={styles.missionTitle}>{title}</h3>
        <div>{showStar && <StarIcon />}</div>
      </header>
      <p className={styles.missionDescription}>{description}</p>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={onChallengeClick}
          text="挑戦する"
          theme="secondary"
          size="slim"
        />
      </div>
    </article>
  );
};

export default MissionCard;
