"use client";
import * as React from "react";
import styles from "./list.module.css";
import ListCard from "./listcard";
import { Loading } from "@/app/components/index";

export interface ListItem {
  id: string | number;
  name: string;
  nearest_station?: string;
  walking_time?: number;
  address?: string;
  images: string[];
  description?: string;
}

interface ListProps {
  items: ListItem[];
  loading?: boolean;
  showContent?: boolean;
  onItemClick?: (id: string | number) => void;
  buttonText?: string;
}

function List({
  items,
  loading = false,
  showContent = true,
  onItemClick,
  buttonText = "詳細"
}: ListProps) {
  if (loading || !showContent) {
    return <Loading loading={loading} paddingTop={80} />;
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p>表示するアイテムがありません</p>
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.listItem}>
          <ListCard
            images={item.images}
            imageAlt={`${item.name}の画像`}
            title={item.name}
            description={item.nearest_station && item.walking_time
              ? `${item.nearest_station}から徒歩${item.walking_time}分`
              : item.description || ''}
            subDescription={item.address}
            onDetailClick={onItemClick ? () => onItemClick(item.id) : undefined}
            buttonText={buttonText}
          />
        </div>
      ))}
    </div>
  );
}

export default List;