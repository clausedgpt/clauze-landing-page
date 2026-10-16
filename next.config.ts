import type { NextConfig } from "next";

// Vercel previews (and anything not production) stay out of search results,
// files like llms.txt included; pages also carry a robots meta (lib/seo.ts).
const indexable = (process.env.VERCEL_ENV ?? "production") === "production";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Loads its WebAssembly at import; bundling it breaks that (lib/og-arabic.ts).
  serverExternalPackages: ["harfbuzzjs"],
  async headers() {
    return indexable ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
