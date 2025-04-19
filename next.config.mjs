/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Asegúrate de que el basePath coincida exactamente con el nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/newcode-agency' : '',
  // Importante: no uses distDir: 'out' ya que Next.js ya usa 'out' por defecto con output: 'export'
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Asegúrate de que las rutas estáticas se generen correctamente
  trailingSlash: true,
};

export default nextConfig;
