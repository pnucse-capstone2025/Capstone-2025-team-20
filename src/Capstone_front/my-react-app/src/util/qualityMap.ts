export const QUALITY_LABELS: Record<string, string> = {
  U: "-",
  B: "블루레이 (FHD, 1080p)",
  "3": "3D 블루레이",
  "4": "4K 블루레이 (UHD)",
};

export function getQualityLabel(quality?: string | null): string {
  if (!quality) return "-";
  return QUALITY_LABELS[quality] ?? quality;
}



