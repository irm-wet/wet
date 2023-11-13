/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    superbaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    superbaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  compiler: {
    styledComponents: true,
  },
  basePath: '/wet', // 배포시에만 활성화
};

module.exports = nextConfig;
