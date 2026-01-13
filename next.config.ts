import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable built-in locale detection to match the four supported languages.
   * We still drive copy via a client provider, but this keeps routes ready for i18n.
   */
  i18n: {
    locales: ["en", "id", "vi", "th"],
    defaultLocale: "en",
  },
};

export default nextConfig;
