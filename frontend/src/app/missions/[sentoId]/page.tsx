"use client";

import { useState, useEffect } from "react";
import { getUserMissions } from "@/utils/fetchings";
import React from "react";
import PageContainer from "@/app/components/page-container/page-container";
import MissionList, { Mission } from "@/app/components/mission-list/mission-list";
import MissionFooter from "@/app/components/mission-list/mission-footer";

export default function MissionsPage({ params }: { params: { sentoId: string } }) {
  const { sentoId } = params;
  const initialMissionState: Mission[] = [
    {
      id: "1",
      name: "初めての入浴",
      description: "銭湯での最初の入浴を完了しよう。",
      isCompleted: false,
    },
    {
      id: "2",
      name: "サウナチャレンジ",
      description: "サウナで5分間耐えよう。",
      isCompleted: true,
    },
    {
      id: "3",
      name: "湯冷まし",
      description: "湯上がりに休憩スペースでゆったりしよう。",
      isCompleted: false,
    },
    {
      id: "4",
      name: "地元グルメを楽しもう",
      description: "銭湯周辺のお店で地元のグルメを楽しもう。",
      isCompleted: false,
    },
    {
      id: "5",
      name: "3種のお湯制覇",
      description: "露天風呂、電気風呂、炭酸風呂にそれぞれ入ろう。",
      isCompleted: true,
    },
    {
      id: "6",
      name: "スタンプラリーマスター",
      description: "銭湯内の全てのミッションを完了しよう。",
      isCompleted: false,
    },
  ];

  const [missions, setMissions] = useState<Mission[]>(initialMissionState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const data = await getUserMissions(sentoId);
        setMissions(data);
      } catch (error) {
        console.error("ミッションの取得に失敗しました", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, [sentoId]);

  const handleCompleteMission = async (missionId: string) => {
    try {
      // ミッション達成APIを呼び出す
      await completeMissionAPI(missionId);
      // 成功したらミッションのステータスを更新
      setMissions((prevMissions) =>
        prevMissions.map((mission) =>
          mission.id === missionId ? { ...mission, isCompleted: true } : mission
        )
      );
    } catch (error) {
      console.error("ミッション達成に失敗しました", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageContainer>
        <MissionList
          list={missions}
          handleChallengeClick={handleCompleteMission}
          handleStarClick={(_: string) => {}}
        />
      </PageContainer>
      <MissionFooter
          handleClickTsukaritai={() => {}}
          tsukaritai={24}
          officialSiteUrl="http://google.com"
        />
    </>
  );
}

async function completeMissionAPI(missionId: string) {
  const res = await fetch(`http://127.0.0.1:8000/api/user/missions/${missionId}/complete/`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("ミッション達成に失敗しました");
  }
}
