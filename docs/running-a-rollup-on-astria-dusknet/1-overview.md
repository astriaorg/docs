---
sidebar_position: 1
---

# Overview

To deploy a remote Rollup on Dusknet, you will need to have the
[dev-cluster](https://github.com/astriaorg/dev-cluster/tree/main) and the main
[astria repo](https://github.com/astriaorg/astria) cloned and on your machine,
and also have the following dependencies installed:
- Foundry Cast and Forge tools - https://book.getfoundry.sh/getting-started/installation
- docker - https://docs.docker.com/get-docker/
- kubectl - https://kubernetes.io/docs/tasks/tools/
- helm - https://helm.sh/docs/intro/install/
- kind - https://kind.sigs.k8s.io/docs/user/quick-start/#installation
- just - https://just.systems/man/en/chapter_4.html

Many of these dependencies are also required for running the local dev-cluster.

For reference, the latest component releases that the devnet cluster is running are the
following:
- [conductor v0.7.0](https://github.com/astriaorg/astria/releases/tag/v0.7.0--conductor)
- [composer v0.2.2](https://github.com/astriaorg/astria/releases/tag/v0.2.2--composer)
- [sequencer-relayer v0.5.1](https://github.com/astriaorg/astria/releases/tag/v0.5.1--sequencer-relayer)
- [sequencer
  v0.4.1](https://github.com/astriaorg/astria/releases/tag/v0.4.1--sequencer)

You do not need to download these independently, they are already within the
dev-cluster repo.

Once all of the dependencies have been installed, you can move on to running the
rollup.
