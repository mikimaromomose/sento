"use client";

import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerUser } from "@/utils/fetchings";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    password2: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage('登録に成功しました！');
    } catch (error) {
      setMessage('エラーが発生しました。もう一度お試しください。');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        ユーザー登録
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="メールアドレス"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="パスワード"
          type="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="パスワード（確認用）"
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          登録
        </Button>
      </form>
      {message && <Typography color="error">{message}</Typography>}
    </Container>
  );
};

export default Register;

