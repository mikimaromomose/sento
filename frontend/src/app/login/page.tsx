"use client"; // クライアントコンポーネントであることを宣言

import React, { useState, useEffect } from "react";
import Card from "../components/card/card"
import LineButton from "../components/line/button";
import { Button, Typography, CircularProgress, Container } from "@mui/material";

const LineLoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // ローディング状態を管理

  useEffect(() => {
    // ログイン状態を確認するAPIを呼び出す
    fetch("http://localhost:8000/api/auth/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // クッキーを含めて送信
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("ログイン状態の確認に失敗しました");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoggedIn(true);
        setUsername(data.username || "ゲスト");
      })
      .catch((error) => {
        console.error(error);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setLoading(false); // ローディング終了
      });
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:8000/api/auth/line/login/";
  };

  const handleLogout = () => {
    fetch("http://localhost:8000/api/auth/logout/", {
      method: "POST",
      credentials: "include", // クッキーを含めて送信
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(false);
        } else {
          console.error("ログアウトに失敗しました");
        }
      })
      .catch((error) => console.error(error));
  };

  if (loading) {
    // ローディング中の表示
    return (
      <Card maxWidth={650}>
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          読み込み中...
        </Typography>
      </Card>
    );
  }

  return (
    <Card maxWidth={650}>
      {isLoggedIn ? (
        <>
          <Typography variant="h5">ようこそ、{username}さん！</Typography>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px" }}
          >
            ログアウト
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            ログインしていません
          </Typography>
          <LineButton onLogin={handleLogin} />
        </>
      )}
    </Card>
  );
};

export default LineLoginButton;
