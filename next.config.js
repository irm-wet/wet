/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  env: {
    superbaseUrl: process.env.superbaseUrl,
    superbaseKey: process.env.superbaseKey,
  },
  compiler: {
    styledComponents: true,
  },
  // basePath: '/wet', // 배포시에만 활성화
};

module.exports = nextConfig;
