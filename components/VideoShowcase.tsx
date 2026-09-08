"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Film,
} from "lucide-react";
import { meccaVideos } from "@/lib/meccavideo";
import type { VideoItem } from "@/lib/Videos";

/** Which direction the featured video just moved, drives the slide animation */
type Direction = 1 | -1;

const playerVariants: Variants = {
  enter: (direction: Direction) => ({
    opacity: 0,
    x: direction * 28,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: Direction) => ({
    opacity: 0,
    x: direction * -28,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  }),
};

function PlaceholderFrame() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-navy-gradient"
      aria-hidden="true"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
        <Play className="h-6 w-6 fill-white/80 text-white/80 ml-0.5" />
      </div>
    </div>
  );
}

interface VideoShowcaseProps {
  /** Optional override, defaults to the shared meccaVideos data source */
  videos?: VideoItem[];
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export default function VideoShowcase({
  videos = meccaVideos,
  eyebrow = "MECCA MEDIA",
  heading = "See Healthcare in Action",
  description = "Step inside our clinics, meet our specialists, and explore the clinical precision, sterile manufacturing standards, and patient safety innovations behind every Mecca medical device.",
}: VideoShowcaseProps) {
  const [[index, direction], setState] = useState<[number, Direction]>([0, 1]);
  const total = videos?.length ?? 0;

  const activeVideo = total > 0 ? videos[index] : null;

  const goTo = useCallback(
    (nextIndex: number, dir: Direction) => {
      if (total === 0) return;
      const wrapped = ((nextIndex % total) + total) % total;
      setState([wrapped, dir]);
    },
    [total],
  );

  const handleNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const handlePrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  const handleThumbnailClick = useCallback(
    (targetIndex: number) => {
      if (targetIndex === index) return;
      goTo(targetIndex, targetIndex > index ? 1 : -1);
    },
    [goTo, index],
  );

  const counter = useMemo(
    () => `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
    [index, total],
  );

  if (!activeVideo || total === 0) return null;

  return (
    <section
      id="video-showcase"
      className="section-py relative overflow-hidden bg-gradient-to-b from-white via-bg/70 to-white"
    >
      {/* Medical Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,black,transparent)]" />

      {/* Ambient luxury glow orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-burgundy/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-medblue/8 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl">
        {/* Main 2-column showcase grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT COLUMN — Brand copy & controls (5 cols) */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
            {/* Eyebrow badge */}
            <div className="eyebrow mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-burgundy/20 bg-burgundy/10 px-4 py-1.5 text-xs font-semibold text-burgundy backdrop-blur-md">
              <Film className="h-3.5 w-3.5" />
              <span>{eyebrow}</span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              See Healthcare in{" "}
              <span className="text-burgundy">Action</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-gray sm:text-lg">
              {description}
            </p>

            {/* Value checklist bullets */}
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-navy">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>ISO 13485 & CE certified device demonstrations</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-navy">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>Step-by-step clinical priming & safety mechanisms</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-navy">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>Engineered for zero-air entry & precision flow delivery</span>
              </div>
            </div>

            {/* Controls: Counter + Prev / Next */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <div
                className="flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2 shadow-card"
                aria-live="polite"
              >
                <span className="h-2 w-2 rounded-full bg-burgundy animate-pulse" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-gray">
                  Video
                </span>
                <span className="font-heading text-sm font-extrabold text-navy tabular-nums">
                  {counter}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous video"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-300 hover:border-burgundy hover:bg-burgundy hover:text-white hover:shadow-soft active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next video"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-300 hover:border-burgundy hover:bg-burgundy hover:text-white hover:shadow-soft active:scale-95"
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Featured Cinematic Player (7 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative rounded-xl2 border border-border/80 bg-white/90 p-3 shadow-soft backdrop-blur-xl sm:p-4">
              {/* Ambient backdrop glow */}
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-xl2 bg-gradient-to-r from-burgundy/10 to-medblue/10 blur-xl opacity-70" />

              {/* Video container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0A1B2E] shadow-inner">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={activeVideo.id}
                    custom={direction}
                    variants={playerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    {activeVideo.youtubeId ? (
                      <iframe
                        key={activeVideo.youtubeId}
                        className="h-full w-full border-0"
                        src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                        title={activeVideo.title || `Mecca Healthcare video ${activeVideo.id}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <PlaceholderFrame />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Floating clinical badge on top of player */}
                <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md border border-white/15">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Clinical Demo</span>
                </div>
              </div>

              {/* Title & description below player */}
              <div className="px-2 pt-4 pb-2 sm:px-3">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeVideo.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-heading text-lg font-bold text-navy sm:text-xl md:text-2xl">
                        {activeVideo.title || "Video title coming soon"}
                      </h3>
                      {activeVideo.youtubeId && (
                        <a
                          href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-burgundy transition-colors hover:text-burgundy-dark"
                        >
                          <span>Watch on YouTube</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray sm:text-base">
                      {activeVideo.description ||
                        "A description will appear here once this video is added."}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA — Interactive Video Playlist Cards */}
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-gray">
              Featured Clinical Demonstrations ({total})
            </span>
            <span className="text-xs text-gray hidden sm:inline">
              Click any video to load into the player
            </span>
          </div>

          <div
            className={`grid gap-5 ${
              total <= 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {videos.map((video, i) => {
              const isActive = i === index;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleThumbnailClick(i)}
                  aria-label={video.title || `Play video ${i + 1}`}
                  aria-current={isActive}
                  className={`group relative flex flex-col rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-burgundy bg-white shadow-[0_12px_32px_rgba(139,30,45,0.18)] ring-2 ring-burgundy/30 -translate-y-1"
                      : "border-border bg-white hover:border-navy/25 hover:bg-slate-50/70 hover:shadow-card hover:-translate-y-0.5"
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy">
                    {video.thumbnail ? (
                      <Image
                        src={video.thumbnail}
                        alt={video.title || `Video ${i + 1} thumbnail`}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover transition-transform duration-500 ${
                          isActive
                            ? "scale-105 opacity-100"
                            : "opacity-90 group-hover:scale-105 group-hover:opacity-100"
                        }`}
                      />
                    ) : (
                      <PlaceholderFrame />
                    )}

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${
                          isActive
                            ? "bg-burgundy text-white scale-110 shadow-burgundy/40"
                            : "bg-white/85 text-navy group-hover:bg-burgundy group-hover:text-white group-hover:scale-110"
                        }`}
                      >
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Status badge top-left */}
                    <div className="absolute top-2.5 left-2.5">
                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                          Now Playing
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-navy/85 px-2.5 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
                          Video {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Video Meta Info */}
                  <div className="mt-3.5 flex flex-1 flex-col px-1">
                    <h4
                      className={`font-heading text-sm font-bold sm:text-base line-clamp-2 transition-colors duration-200 ${
                        isActive
                          ? "text-burgundy"
                          : "text-navy group-hover:text-burgundy"
                      }`}
                    >
                      {video.title || "Video title coming soon"}
                    </h4>
                    <p className="mt-1.5 text-xs text-gray line-clamp-2 leading-relaxed flex-1">
                      {video.description ||
                        "A description will appear here once this video is added."}
                    </p>

                    <div className="mt-3.5 pt-2.5 border-t border-border/70 flex items-center justify-between text-xs font-semibold">
                      <span
                        className={
                          isActive
                            ? "text-burgundy font-bold"
                            : "text-gray group-hover:text-navy"
                        }
                      >
                        {isActive ? "Active in Player" : "Click to Play"}
                      </span>
                      <span className="text-burgundy font-bold transition-transform group-hover:translate-x-0.5">
                        Watch &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}