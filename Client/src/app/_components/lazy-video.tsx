"use client";
import { JSX, useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({
  src,
  className,
}: LazyVideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true); // Bật phát video
        } else {
          setIsPlaying(false); // Tạm dừng video
        }
      },
      { threshold: 0.5 } // Kích hoạt khi ít nhất 50% video xuất hiện trong viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Phát video ngay khi trang tải
    }
  }, []);
  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className={className}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
