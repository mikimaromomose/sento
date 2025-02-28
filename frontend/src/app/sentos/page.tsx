"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getSentos, Sento } from "@/utils/fetchings";
import React from "react";
import List from "@/app/components/list/list";
import { ListItem } from "@/app/components/list/list";

// ListItemとSentoの型を合わせるためのインターフェース拡張
interface SentoListItem extends ListItem {
  nearest_station?: string;
  walking_time?: number;
  address?: string;
}

const DEFAULT_SENTOS: SentoListItem[] = [
  {
    id: "5a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "小杉湯",
    nearest_station: "高円寺",
    walking_time: 5,
    address: "東京都杉並区高円寺北３丁目３２−１７",
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "4a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "なみのゆ",
    nearest_station: "高円寺",
    walking_time: 5,
    address: "東京都杉並区高円寺北2丁目",
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "3a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "たからゆ",
    nearest_station: "都立家政",
    walking_time: 5,
    address: "東京都中野区",
    images: ["小杉湯.jpeg", "小杉湯.jpeg", "小杉湯.jpeg"],
  },
  {
    id: "2a55efdd-ad25-48b7-83b7-b5ffabcbf082",
    name: "松本湯",
    nearest_station: "中野",
    walking_time: 5,
    address: "東京都中野区１７",
    images: ["小杉湯.jpeg"],
  },
  {
    id: "2a55efdd-ad25-48b7-83b7-b5ffabcbf044",
    name: "トンボの湯",
    nearest_station: "長野県",
    walking_time: 3,
    address: "かるいざわ",
    images: ["小杉湯.jpeg", "小杉湯.jpeg"],
  },
];
export default function Sentos() {
  const router = useRouter();
  const [sentos, setSentos] = useState<SentoListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchSentos = async () => {
      try {
        const data = await getSentos();
        if (data && data.length > 0) {
          // Sentoの配列をSentoListItemの配列に変換
          const convertedData: SentoListItem[] = data.map(sento => ({
            id: sento.id,
            name: sento.name,
            nearest_station: sento.nearest_station,
            walking_time: sento.walking_time,
            address: sento.address,
            images: sento.images || [],
            description: `${sento.nearest_station}から徒歩${sento.walking_time}分`
          }));
          setSentos(convertedData);
        } else {
          setSentos(DEFAULT_SENTOS);
        }
      } catch (error) {
        console.error("データ取得に失敗しました:", error);
        setSentos(DEFAULT_SENTOS);
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

  const handleDetailClick = (id: string | number) => {
    router.push(`/missions/${id}`);
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
      <List
        items={sentos}
        loading={loading}
        showContent={showContent}
        onItemClick={handleDetailClick}
        buttonText="詳細"
      />
    </div>
  );

}
