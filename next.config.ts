/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aturan utama pembuka blokir lintas IP jaringan lokal di Next.js v16
  allowedDevOrigins: ['169.254.173.84', '169.254.173.84:3000', 'localhost:3000']
};

module.exports = nextConfig;
