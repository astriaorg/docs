---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Astria"
  text: "The Shared Sequencer Network"
  tagline: The easiest way to deploy decentralized rollups.
  image:
    src: /astria-logo-inverted.svg
    alt: Astria
  actions:
    - theme: brand
      text: Just rollup
      link: /local-rollup/1-introduction
    - theme: alt
      text: Introduction
      link: /overview/1-introduction

features:
  - title: Learn
    details: Astria is a shared sequencing network that allows many rollups to share a single decentralized network of sequencers.
    link: /overview/1-introduction
  - title: Deploy
    details: This guide will walk you through deploying a rollup full node on a local Kubernetes cluster which uses the Astria shared sequencer network.
    link: /local-rollup/1-introduction
  - title: Developers
    details: Use the Astria stack to create, integrate and build your own modular rollups.
    link: /developer/tutorials/1-using-astria-go-cli
---

