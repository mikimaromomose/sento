"use client";

import React from "react";
import styles from "./mission-list.module.css";
import MissionCard from "./mission-card";

interface Mission {
  id: string;
  title: string;
  description: string;
  showStar: boolean;
}

const MissionList: React.FC = () => {
  // Sample mission data
  const missions: Mission[] = [
    {
      id: "1",
      title: "ミッションメイ",
      description:
        "説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が",
      showStar: true,
    },
    {
      id: "2",
      title: "ミッションメイ",
      description:
        "説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が",
      showStar: true,
    },
    {
      id: "3",
      title: "ミッションメイ",
      description:
        "説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が",
      showStar: false,
    },
  ];

  const handleChallengeClick = (missionId: string) => {
    console.log(`Challenge clicked for mission ${missionId}`);
    // Add your challenge logic here
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.container}>
        {missions.map((mission) => (
          <MissionCard
            key={mission.id}
            title={mission.title}
            description={mission.description}
            showStar={mission.showStar}
            onChallengeClick={() => handleChallengeClick(mission.id)}
          />
        ))}
      </section>
    </>
  );
};

export default MissionList;
