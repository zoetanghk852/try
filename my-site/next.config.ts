/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 关键：启用静态导出，build 时生成 out 文件夹

  // GitHub Pages 项目站点通常是 https://username.github.io/repo-name/
  // 所以需要设置 basePath 和 assetPrefix
  basePath: process.env.BASE_PATH || "", // 如 '/repo-name'
  assetPrefix: process.env.ASSET_PREFIX || "",

  images: {
    unoptimized: true, // 静态导出时必须禁用 Next.js Image 优化（否则报错）
  },

  trailingSlash: true, // 可选：添加 trailing slash，避免路由问题
};

export default nextConfig;
