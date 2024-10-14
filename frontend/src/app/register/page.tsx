"use client";

import { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import liff from '@line/liff';

const Register = () => {
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<{ displayName: string; userId: string } | null>(null);

  useEffect(() => {
    const initLiff = async () => {
      try {
        // LIFFを初期化
        await liff.init({ liffId: 'mikimaromomose@gmail.com' });
        if (!liff.isLoggedIn()) {
          // LINEに未ログインの場合はログインを促す
          liff.login();
        } else {
          // ログイン済みの場合はプロフィール情報を取得
          const profile = await liff.getProfile();
          setProfile({ displayName: profile.displayName, userId: profile.userId });
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('LIFF初期化に失敗しました', error);
      }
    };

    initLiff();
  }, []);

  const handleRegister = async () => {
    if (profile) {
      try {
        // サーバー側でユーザー登録を行う（例: DjangoのAPIにリクエストを送る）
        const res = await fetch('/api/register-line-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: profile.userId, // LINEのユーザーID
            displayName: profile.displayName, // 表示名
          }),
        });

        if (res.ok) {
          setMessage('登録に成功しました！');
        } else {
          throw new Error('サーバーエラー');
        }
      } catch (error) {
        setMessage('エラーが発生しました。もう一度お試しください。');
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        ユーザー登録
      </Typography>
      {isLoggedIn ? (
        <div>
          <Typography variant="h6" align="center">
            {profile?.displayName} さん、ようこそ！
          </Typography>
          <Button
            onClick={handleRegister}
            variant="contained"
            color="primary"
            fullWidth
          >
            LINEで登録
          </Button>
        </div>
      ) : (
        <Typography variant="body1" align="center">
          LINEログイン中...
        </Typography>
      )}
      {message && <Typography color="error">{message}</Typography>}
    </Container>
  );
};

export default Register;
