"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header, Menu } from "./components/index";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import styles from './layout.module.css';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MenuItemsProp } from "./components/menu";

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
  const router = useRouter();
  const pathName = usePathname();

  /** メニューアイテム */
  const initialMenuItems: MenuItemsProp[] = [
    {
      id: 'sentos',
      label: 'セントウを探す',
      onClick: () => router.push(`/sentos/`)
    },
    {
      id: 'register',
      label: '会員登録',
      onClick: () => router.push(`/register/`)
    }
  ];
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  useEffect(() => {
    setMenuItems(
      menuItems.map(item => {
        item.isActive = pathName.indexOf(item.id) > 0;
        return item;
      })
    )
  }, [pathName]);

  /** メニュー */
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="ja">
      <head />
      <body
        className={inter.className}
        onClick={() => menuOpen && setMenuOpen(false)}
      >
        <ThemeProvider theme={sentoTheme}>
          <CssBaseline />
            <>
              { pathName !== '/' &&
                <>
                  <div className={styles.headerWrapper}>
                    <Header
                      leftIcon={menuOpen ? CloseIcon : MenuIcon}
                      onClickLeftIcon={toggleMenu}
                      rightIconSecond={PersonIcon}
                      onClickRightIconSecond={() => router.push('/register/')}
                    />
                  </div>
                  {menuOpen &&
                    <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
                      <Menu logo={false} items={menuItems} />
                    </div>
                  }
                </>
              }
              {children}
            </>
        </ThemeProvider>
      </body>
    </html>
  );
}
