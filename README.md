# Astria Docs

The Astria Docs website built with [VitePress](https://vitepress.dev/)

### Installation

To get started, clone the repository and run the following:

```
npm add -D vitepress
```

### Local Development

To run a local development site:

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

### Contribution Guidelines

* Fork & Clone: Fork this repository and clone it to your local machine.
* Branch: Always create a new branch for your changes. Naming it relevantly.
* Commit Changes: Make your changes and commit them with a clear and concise commit message.
* Push & Create PR: Push your changes to your fork and create a pull request to the main branch of this repository.
* Please ensure to review the detailed Contribution Guidelines above before making a pull request.
