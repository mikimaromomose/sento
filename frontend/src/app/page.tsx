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
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <Image
            src="/images/title.png"
            alt="Title Logo"
            layout='fill'
            objectFit='contain'
          />
        </div>
      </main>
      <div className={styles.imasugu}>
        <Image
            src="/images/imasugu.png"
            alt="Title Logo"
            layout='fill'
            objectFit='contain'
            priority
            onClick={() => router.push(`/sentos/`)}
            style={{
              cursor: 'pointer',
            }}
          />
      </div>
    </>
  );
}
