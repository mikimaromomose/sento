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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Loading } from "../components/index";

const DEFAULT_SENTOS: Sento[] = [
  {
    id: "5a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "小杉湯",
    nearest_station: "高円寺",
    walking_time: 5,
    address: "東京都杉並区高円寺北３丁目３２−１７",
    operating_hours_remarks: null,
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "4a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "なみのゆ",
    nearest_station: "高円寺",
    walking_time: 5,
    address: "東京都杉並区高円寺北2丁目",
    operating_hours_remarks: null,
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "3a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "たからゆ",
    nearest_station: "都立家政",
    walking_time: 5,
    address: "東京都中野区",
    operating_hours_remarks: null,
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "2a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "松本湯",
    nearest_station: "中野",
    walking_time: 5,
    address: "東京都中野区１７",
    operating_hours_remarks: null,
    images: ["小杉湯.jpeg"],
  },
  {
    id: "2a55efdd-ad25-48b7-83b7-b5ffabcbf044",
    name: "トンボの湯",
    nearest_station: "長野県",
    walking_time: 3,
    address: "かるいざわ",
    operating_hours_remarks: null,
    images: ["小杉湯.jpeg", "小杉湯.jpeg"],
  },
];
export default function Sentos() {
  const router = useRouter();
  const [sentos, setSentos] = useState<Sento[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchSentos = async () => {
      try {
        const data = await getSentos();
        if (data && data.length > 0) {
          setSentos(data);
        } else {
          setSentos(DEFAULT_SENTOS); // デフォルトデータを設定
        }
      } catch (error) {
        console.error("データ取得に失敗しました:", error);
        setSentos(DEFAULT_SENTOS); // デフォルトデータを設定
      } finally {
        setLoading(false);
      }
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

   // Sliderの設定
    const NextArrow = ({ className, style, onClick }) => {
      return (
        <div
          className={className}
          style={{ ...style, display: "block", position: 'absolute', top: '50%', right: '10px',
            zIndex: '1', cursor: 'pointer' , right: '-3px'}}
            onClick={onClick}
        >
       </div>
     );
    };

    const PrevArrow = ({className, style, onClick }) => {
      return (
        <div
          className={className}
          style={{ ...style, display: "block", position: 'absolute', top: '50%', left: '10px',
           zIndex: '1', cursor: 'pointer' ,left: '-3px'}}
          onClick={onClick}
        >
        </div>
      );
    };


    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };


  return (
    <div style={{ backgroundColor: 'white' }}>
      <header style={{ backgroundColor: '#D4AF37', padding: '70px' }}>
      <img
        src="タイトル-3-横タイトル白.png"  // Path to your PNG image
        alt="Header Image"
        style={{
          width: '100%', // 画像幅を画面幅に合わせる（スマホでも全幅）
          maxWidth: '500px', // 最大幅を指定（これで大きすぎないように調整）
          height: 'auto', // アスペクト比を保つ
          marginBottom: '20px', // 画像とテキストの間にスペース
          display: 'block', // 画像をブロック要素として扱い、中央に配置
          marginLeft: 'auto', // 左マージン自動
          marginRight: 'auto', // 右マージン自動
       }}
      />
      </header>
      <Grid container spacing={2}>
        {sentos.map((sento) => (
          <Grid item xs={12} sm={6} md={4} key={sento.id}>
            <Card style={{ backgroundColor: 'white' , margin: '10px' }}>
              <Grid container>
                <Grid item xs={5}>
                <Slider {...settings}>
                  {sento.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="140"
                      image={image || "default-image.jpeg"} // 銭湯の画像URLを指定
                      alt={`${sento.name}の画像`}
                    />
                  ))}
                </Slider>
                </Grid>
                <Grid item xs={7}>
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
                    <div style={{ textAlign: 'right', marginTop: '16px' }}>
                     <Button
                         variant="contained"
                          style={{ backgroundColor: '#D4AF37', color: 'white',
                            marginBottom: '14px', width: '70%', borderRadius: '12px',
                             transition: 'background-color 0.3s'}}
                          onClick={() => handleDetailClick(sento.id)}
                       >
                        詳細
                      </Button>
                    </div>
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
