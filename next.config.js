/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  env: {
    superbaseUrl: process.env.supabaseUrl,
    superbaseKey: process.env.supabaseKey,
  },
  compiler: {
    styledComponents: true,
  },
  // basePath: '/wet', // 배포시에만 활성화
};

module.exports = nextConfig;
