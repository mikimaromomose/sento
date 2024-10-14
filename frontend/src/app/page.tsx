"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(
      () => {
        router.push(`/sentos/`);
      },
      7000
    );
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image
            src="/images/title.png"
            alt="Title Logo"
            width="250"
            height="800"
            priority
          />
      </div>
    </main>
  );
}
