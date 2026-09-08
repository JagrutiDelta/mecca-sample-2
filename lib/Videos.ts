export interface VideoItem {
  /** Stable identifier, also used as the React key */
  id: number;
  /** Video title shown under the featured player */
  title: string;
  /** One or two line description shown under the title */
  description: string;
  /** The YouTube video ID (the part after v= or youtu.be/) */
  youtubeId: string;
  /** Path to a static thumbnail image, e.g. /videos/thumb-1.jpg */
  thumbnail: string;
}
