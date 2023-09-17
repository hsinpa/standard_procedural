/** @type {import('next').NextConfig} */

const path = require('path')
console.log(__dirname);

const nextConfig = {  
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
