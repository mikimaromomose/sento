"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const inter = Inter({ subsets: ["latin"] });

const sentoTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0077b6",
    },
    secondary: {
      main: "#f4a261",
    },
    background: {
      default: "#faf3dd", // 濃い目のクリーム色に変更
      paper: "#fefae0", // カードの背景をクリーム色に設定
    },
    text: {
      primary: "#333333",
      secondary: "#6c757d",
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 700,
      color: "#333333", // ヘッダーの文字色をクリーム色に映える濃い色に変更
    },
    body1: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "20px",
          backgroundColor: "#fefae0", // カードの背景をクリーム色に設定
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: "8px",
        },
      },
    },
  },
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className={inter.className}>
        <ThemeProvider theme={sentoTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
