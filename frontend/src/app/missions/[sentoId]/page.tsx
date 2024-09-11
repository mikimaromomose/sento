"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserMissions } from "@/utils/fetchings";
import Button from "@mui/material/Button";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Mission = {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
};

export default function MissionsPage({ params }: { params: { sentoId: string } }) {
  const { sentoId } = params;
  const [missions, setMissions] = useState<Mission[]>([]);
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
          mission.mission.id === missionId ? { ...mission, isCompleted: true } : mission
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
    <div>
      <h1>ミッション一覧</h1>
      <Grid container spacing={2}>
        {missions.map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.mission.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {mission.mission.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {mission.mission.description}
                </Typography>
                <Typography variant="body2" color={mission.mission.isCompleted ? "primary" : "error"}>
                  {mission.mission.isCompleted ? "完了" : "未完了"}
                </Typography>
                {!mission.mission.isCompleted && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCompleteMission(mission.mission.id)}
                  >
                    完了する
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
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
