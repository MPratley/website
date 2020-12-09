const package = require('../../package.json')

const urlRoots = {
  development: 'http://localhost:8080',
  production: 'https://www.mjp.dev',
}

module.exports = {
  lang: 'en',
  name: package.name,
  title: "marcus' website",
  type: 'website',
  url: urlRoots[process.env.NODE_ENV],
  github: package.repository.url,
  image:
    urlRoots[process.env.NODE_ENV] +
    '/assets/static/img/hello_from_marcus_preview.webp',
  description: package.description,
}
