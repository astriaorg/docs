# Astria Docs

The Astria Docs website built with [VitePress](https://vitepress.dev/)

### Installation

```
npm add -D vitepress
```

### Local Development

```
npm run docs:dev
```

This command starts a local development server. Most changes are reflected live without having to restart the server.


### Build

```
npm run docs:build
```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
npm run docs:preview
```

This command starts a local server from the static content generated above for preview before deployment.

The main astria docs website is deployed using the [github deploy action](.github/workflows/deploy.yml).

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
