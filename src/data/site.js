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
  image: 'https://avatars3.githubusercontent.com/u/447956?s=400&v=4',
  description: package.description,
}
