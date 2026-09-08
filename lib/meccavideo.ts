import { VideoItem } from "./Videos";

/**
 * Source data for the VideoShowcase section.
 *
 * To add or update a video, edit this array only — the VideoShowcase
 * component reads everything from here, so no component code needs to
 * change.
 */
export const meccaVideos: VideoItem[] = [
  {
    id: 1,
    title: "Auto Prime Air Stop Infusion Device",
    description:
      "Learn about the Auto Prime Air Stop Infusion Device, a self-priming IV set designed with an air-stop feature to help prevent air from entering the infusion line.",
    youtubeId: "tgGm0-EbzBk",
    thumbnail: "https://img.youtube.com/vi/tgGm0-EbzBk/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "How to Prime an Infusion Set with Dial Flow Regulator",
    description:
      "A step-by-step demonstration of how to prime an infusion set fitted with a dial flow regulator for controlled and effective fluid administration.",
    youtubeId: "tnhq_XpCZlc",
    thumbnail: "https://img.youtube.com/vi/tnhq_XpCZlc/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "LifeGuard Advance Auto Prime Air Stop Infusion Device",
    description:
      "Discover the LifeGuard Advance Auto Prime Air Stop Infusion Device from Mecca Healthcare, featuring an auto-prime mechanism and air-stop functionality for safer infusion.",
    youtubeId: "zhRrv_vAg94",
    thumbnail: "https://img.youtube.com/vi/zhRrv_vAg94/maxresdefault.jpg",
  },
];