/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    superbaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    superbaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
