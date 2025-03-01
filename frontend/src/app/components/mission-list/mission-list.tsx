"use client";

import React from "react";
import styles from "./mission-list.module.css";
import MissionCard from "./mission-card";
import Headline from "../text/headline";

export type Mission = {
  id: string;
  name: string;
  description: string;
  showStar?: boolean;
  isCompleted: boolean
}
export interface MissionListProps {
  list: Mission[];
  handleChallengeClick: (missionId: string) => void;
  handleStarClick: (missionId: string) => void
}

const MissionList: React.FC<MissionListProps> = ({ list, handleChallengeClick, handleStarClick}) => {

  return (
    <div className={styles.wrapper}>
      <Headline text={`ミッション一覧`} />
      <section className={styles.container}>
        {list.map((mission) => (
          <MissionCard
            key={mission.id}
            title={mission.name}
            description={mission.description}
            showStar={mission.showStar}
            isCompleted={mission.isCompleted}
            onChallengeClick={() => handleChallengeClick(mission.id)}
            onStarClick={() => handleStarClick(mission.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default MissionList;
