"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

type LoadingProps = {
  loading: boolean,
  width?: number,
  height?: number,
  paddingTop?: number,
}

export default function Loading({ loading, width = 80, height = 80, paddingTop = 0 }: LoadingProps) {
  if (loading) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0], // マークが上下に動く
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            fontSize: "50px",
            textAlign: "center",
            paddingTop: paddingTop
          }}
        >
          <Image
            src="/images/loading.png"
            alt="loading icon"
            width={width}
            height={height}
          />
        </motion.div>
      </motion.div>
    );
  }

  return null;
}
