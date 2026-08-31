'use client';

import { useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const videoTitle = '5 Minutes at White Sands';
const progressMilestones = [25, 50, 75] as const;

type TrackedVideoProps = {
  videoUrl: string;
};

export function TrackedVideo({ videoUrl }: TrackedVideoProps) {
  const trackedEvents = useRef(new Set<string>());

  function trackOnce(eventKey: string, eventName: string, parameters: Record<string, string | number>) {
    if (trackedEvents.current.has(eventKey)) return;

    trackedEvents.current.add(eventKey);
    window.gtag?.('event', eventName, {
      video_title: videoTitle,
      video_url: videoUrl,
      ...parameters,
    });
  }

  function handleTimeUpdate(event: React.SyntheticEvent<HTMLVideoElement>) {
    const video = event.currentTarget;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;

    const watchedPercent = (video.currentTime / video.duration) * 100;
    for (const milestone of progressMilestones) {
      if (watchedPercent >= milestone) {
        trackOnce(`progress-${milestone}`, 'video_progress', {
          video_percent: milestone,
          video_duration: Math.round(video.duration),
        });
      }
    }
  }

  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster="/og.png"
      aria-label="A five-minute sunset at White Sands, New Mexico"
      onPlay={(event) => trackOnce('start', 'video_start', {
        video_percent: 0,
        video_duration: Math.round(event.currentTarget.duration || 304),
      })}
      onTimeUpdate={handleTimeUpdate}
      onEnded={(event) => trackOnce('complete', 'video_complete', {
        video_percent: 100,
        video_duration: Math.round(event.currentTarget.duration || 304),
      })}
    >
      <source src={videoUrl} type="video/mp4" />
      <track kind="captions" src="/sunset-captions.vtt" srcLang="en" label="English" default />
      Your browser does not support HTML video. You can <a href={videoUrl}>download the film</a> instead.
    </video>
  );
}
