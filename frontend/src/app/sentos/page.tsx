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
import Loading from "../components/loading";

export default function Sentos() {
  const router = useRouter();
  const [sentos, setSentos] = useState<Sento[]>([]);
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
    return (<Loading loading={loading} paddingTop={80}/>)
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
