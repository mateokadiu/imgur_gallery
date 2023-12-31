export interface GalleryOptions {
  section: "hot" | "top" | "user";
  sort: "viral" | "top" | "time" | "rising";
  page?: number;
  window?: "day" | "week" | "month" | "year" | "all";
  showViral?: boolean;
}

export interface ImgurImage {
  id: string;
  title: string;
  description: string | null;
  datetime: number;
  cover: string;
  cover_width: number;
  cover_height: number;
  account_url: string | null;
  account_id: number | null;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote: string | null;
  favorite: boolean;
  nsfw: boolean;
  section: string;
  comment_count: number | null;
  favorite_count: number | null;
  topic: string | null;
  topic_id: string | null;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: ImgurTag[];
  type: string;
  ad_type: number;
  ad_url: string;
  include_album_ads: boolean;
  images: ImgurImageInfo[];
  in_most_viral: boolean;
  ad_config: {
    safeFlags: string[];
    highRiskFlags: string[];
    unsafeFlags: string[];
    wallUnsafeFlags: string[];
    showsAds: boolean;
    showAdLevel: number;
    nsfw_score: number;
  };
}

interface ImgurTag {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash: string | null;
  accent: string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: string;
  logo_hash: string | null;
  logo_destination_url: string | null;
  description_annotations: Record<string, any>;
}

export interface ImgurImageInfo {
  id: string;
  title: string;
  description: string | null;
  datetime: number;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: string | null;
  favorite: boolean;
  nsfw: boolean | null;
  section: string | null;
  account_url: string | null;
  account_id: string | null;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: string[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  mp4_size: number;
  mp4: string;
  type: string;
  gifv: string;
  hls: string;
  processing: {
    status: string;
  };
  comment_count: number | null;
  favorite_count: number | null;
  ups: number;
  downs: number;
  points: number | null;
  score: number;
}
