"use client";
import * as React from "react";
import styles from "./listcard.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/app/components/button/button";

interface ListCardProps {
  images: string[];
  imageAlt?: string;
  title: string;
  description: string;
  subDescription?: string;
  onDetailClick?: () => void;
  buttonText?: string;
}

function ListCard({
  images,
  imageAlt,
  title,
  description,
  subDescription,
  onDetailClick,
  buttonText = "詳細",
}: ListCardProps) {
  // Sliderの設定
  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: 'absolute',
          top: '50%',
          zIndex: '1',
          cursor: 'pointer',
          right: '-3px'
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: 'absolute',
          top: '50%',
          zIndex: '1',
          cursor: 'pointer',
          left: '-3px'
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        {images.length > 1 ? (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image || "default-image.jpeg"}
                  alt={`${imageAlt || title} ${index + 1}`}
                  className={styles.cardImage}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={images[0] || "default-image.jpeg"}
            alt={imageAlt || title}
            className={styles.cardImage}
          />
        )}
      </div>
      <section className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {subDescription && (
          <p className={styles.cardSubDescription}>{subDescription}</p>
        )}
        {onDetailClick && (
          <div className={styles.cardButtonContainer}>
            <Button
              theme="primary"
              size="medium"
              width="100%"
              text={buttonText}
              onClick={onDetailClick}
            />
          </div>
        )}
      </section>
    </article>
  );
}

export default ListCard;