const package = require('../../package.json')

const urlRoots = {
  development: 'http://localhost:8081',
  production: 'https://www.mjp.dev',
}

module.exports = {
  lang: 'en',
  name: package.name,
  title: "marcus' website",
  type: 'website',
  url: urlRoots[process.env.NODE_ENV],
  github: package.repository.url,
  image: 'https://cdn.shopify.com/s/files/1/0176/3274/products/Pi-Zero-W-1_1000x.jpg',
  description: package.description,
}
