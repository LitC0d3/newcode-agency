/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Asegúrate de que el basePath coincida con el nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/newcode-agency' : '',
  images: {
    unoptimized: true,
  },
  // Deshabilitar el uso de la carpeta .next para GitHub Pages
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
