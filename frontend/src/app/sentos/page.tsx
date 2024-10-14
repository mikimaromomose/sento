"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getSentos, Sento } from "@/utils/fetchings";
import Button from "@mui/material/Button";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

export default function Sentos() {
  const router = useRouter();
  // const [sentos, setSentos] = useState<Sento[]>([]);
  const sentos = [
        {
            "id": "5a55efdd-ad25-48b7-83b7-b5ffabcbf082",
            "name": "小杉湯",
            "nearest_station": "高円寺",
            "walking_time": 5,
            "address": "東京都杉並区高円寺北３丁目３２−１７",
            "operating_hours_remarks": null
        },
      {
            "id": "4a55efdd-ad25-48b7-83b7-b5ffabcbf082",
            "name": "なみのゆ",
            "nearest_station": "高円寺",
            "walking_time": 5,
            "address": "東京都杉並区高円寺北2丁目",
            "operating_hours_remarks": null
        },
        {
            "id": "3a55efdd-ad25-48b7-83b7-b5ffabcbf082",
            "name": "たからゆ",
            "nearest_station": "都立家政",
            "walking_time": 5,
            "address": "東京都中野区",
            "operating_hours_remarks": null
        },
        {
            "id": "2a55efdd-ad25-48b7-83b7-b5ffabcbf082",
            "name": "松本湯",
            "nearest_station": "中野",
            "walking_time": 5,
            "address": "東京都中野区１７",
            "operating_hours_remarks": null
        }
    ]
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchSentos = async () => {
      const data = await getSentos();
      setSentos(data);
      setLoading(false);
    };

    fetchSentos();

    const animationDuration = 2000; // 2秒間表示
    const animationTimeout = setTimeout(() => {
      setShowContent(true);
    }, animationDuration);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleDetailClick = (sentoId: string) => {
    router.push(`/missions/${sentoId}`);
  };

  // if (loading && !showContent) {
  if (!showContent) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0], // マークが上下に動く
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          ♨︎♨︎♨︎♨︎♨︎
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div>
      <h1>セントウツカリタイ</h1>
      <Grid container spacing={2}>
        {sentos.map((sento) => (
          <Grid item xs={12} sm={6} md={4} key={sento.id}>
            <Card>
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="小杉湯.jpeg"
                    alt="銭湯の画像"
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {sento.name}
                    </Typography>
                    <Typography color="textSecondary">
                      {sento.nearest_station}から徒歩{sento.walking_time}分
                    </Typography>
                    <Typography variant="body2" component="p">
                      {sento.address}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleDetailClick(sento.id)}
                    >
                      詳細
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
