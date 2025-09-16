"use client";

import { Play, Pause } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  audioSrc: string; // Đường dẫn tới file nhạc
}

export function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Tải nhạc ngay từ đầu
    }
  }, []);
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={togglePlayPause}
        className="p-2 bg-[#2c3e50] text-white  hover:bg-blue-700 rounded-full"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
    </div>
  );
}
