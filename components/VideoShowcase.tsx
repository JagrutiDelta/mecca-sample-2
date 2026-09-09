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
  eyebrow = "Video Showcase",
  heading = "See Healthcare in Action",
  description = "Explore the clinical precision, sterile manufacturing standards, and patient safety innovations behind every Mecca medical device.",
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
    <section id="video-showcase" className="section-py bg-white relative overflow-hidden">
      {/* Background medical grid decorative pattern */}
      <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,black,transparent)]" />

      <div className="container-px relative">
        {/* Section Heading - Matches other home page sections */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
            {eyebrow}
          </div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-gray leading-relaxed text-base sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Featured Showcase Area */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Active Video Info & Controls (5 cols) */}
          <div className="order-2 flex flex-col justify-between rounded-xl2 border border-border bg-bg/50 p-6 sm:p-8 shadow-card lg:order-1 lg:col-span-5">
            <div>
              {/* Top row with Clinical badge & counter */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-semibold text-burgundy">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Clinical Demonstration
                </span>
                <span className="font-heading text-xs font-bold text-gray uppercase tracking-wider">
                  {counter}
                </span>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeVideo.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-navy sm:text-3xl leading-snug">
                    {activeVideo.title || "Clinical Demonstration"}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray leading-relaxed">
                    {activeVideo.description ||
                      "Explore how Mecca Healthcare devices are manufactured, sterilized, and applied in real-world clinical settings."}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Value checklist bullets */}
              <div className="mt-6 space-y-3 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-sm font-medium text-navy">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>ISO 13485 &amp; CE certified device demonstrations</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-navy">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Step-by-step clinical priming &amp; safety mechanisms</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-navy">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Engineered for zero-air entry &amp; precision flow delivery</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous video"
                  suppressHydrationWarning
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next video"
                  suppressHydrationWarning
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy shadow-card transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white active:scale-95"
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {activeVideo.youtubeId && (
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy transition-colors hover:text-burgundy-dark"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Featured Player (7 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col">
            <div className="relative rounded-xl2 border border-border bg-white p-3 sm:p-4 shadow-card hover:shadow-soft transition-shadow duration-300 h-full flex flex-col justify-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy shadow-inner">
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

                <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md border border-white/15">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Clinical Demonstration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Video Playlist Cards */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">
                Featured Clinical Demonstrations
              </h3>
              <p className="text-xs text-gray mt-0.5">
                Select a video to stream clinical procedures and product usage
              </p>
            </div>
            <span className="text-xs font-semibold text-gray bg-bg px-3 py-1 rounded-full border border-border hidden sm:inline">
              {total} Videos Available
            </span>
          </div>

          <div
            className={`grid gap-6 ${
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
                  suppressHydrationWarning
                  className={`group relative flex flex-col rounded-xl2 border p-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-burgundy bg-white shadow-soft ring-2 ring-burgundy/20 -translate-y-1"
                      : "border-border bg-white hover:border-burgundy/40 hover:shadow-card hover:-translate-y-1"
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

                    <div className="mt-3.5 pt-2.5 border-t border-border flex items-center justify-between text-xs font-semibold">
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