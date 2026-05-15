import { createSocialImageResponse, socialImageSize } from "@/lib/og-image-response";

export const alt = "Amped — New American Energy";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImageResponse();
}
