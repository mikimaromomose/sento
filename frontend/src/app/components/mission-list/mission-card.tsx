"use client";

import React from "react";
import styles from "./mission-card.module.css";
import StarIcon from "@/app/components/icon/star-icon";
import { Button } from "../button/button";
import Image from "next/image";

interface MissionCardProps {
  title: string;
  description: string;
  showStar?: boolean;
  isCompleted: boolean;
  onChallengeClick?: () => void;
  onStarClick?: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  showStar = true,
  isCompleted,
  onChallengeClick,
  onStarClick
}) => {
  return (
    <article className={styles.missionCard}>
      <header className={styles.missionHeader}>
        <h3 className={styles.missionTitle}>{title}</h3>
        {showStar &&
          <div onClick={onStarClick}>
            <StarIcon color="#D9BC66"  />
          </div>
        }
      </header>
      <p className={styles.missionDescription}>{description}</p>
      <div className={styles.buttonWrapper}>
        { isCompleted
          ? <Button
              text="挑戦する"
              theme="disabled"
              size="slim"
            />
          : <Button
              onClick={onChallengeClick}
              text="挑戦する"
              theme="secondary"
              size="slim"
            />
        }
      </div>
      {isCompleted
        && <div className={styles.overlay}>
            <figure className={styles.missionImageContainer}>
              <Image
                src={`/images/mission-clear-stamp.png`}
                alt=""
                width={150}
                height={150}
                className={styles.missionImage}
              />
            </figure>
          </div>
      }
    </article>
  );
};

export default MissionCard;
