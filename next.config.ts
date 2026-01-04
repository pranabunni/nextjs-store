import type { NextConfig } from "next";
import {protocol} from "@electric-sql/pglite";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'tmmijcztjepladhvmmtz.supabase.co',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            }
        ]
    }
};

export default nextConfig;
