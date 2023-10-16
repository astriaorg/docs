---
sidebar_position: 1
---

# Overview

After running the Astria stack locally, the next step is to run a rollup against
the remote Astria network.

The primary difference between running a local rollup and one that targets the
remote devnet, is the configuration of the rollup and creating an account for
the Sequencer.

As before with running a local dev-cluster, you will need to have the
[dev-cluster](https://github.com/astriaorg/dev-cluster/tree/main) and the main
[astria repo](https://github.com/astriaorg/astria) cloned and on your machine,
as well have the following dependencies installed:
- [gcloud cli](https://cloud.google.com/sdk/docs/install)
- [Foundry Cast and Forge tools](https://book.getfoundry.sh/getting-started/installation)
- [docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
- [just](https://just.systems/man/en/chapter_4.html)
- [curl](https://curl.se/)
- [jq](https://jqlang.github.io/jq/)

Many of these dependencies are also required for running the local dev-cluster.

For reference, the latest component releases that the devnet cluster is running are the
following:
- [conductor v0.6.0](https://github.com/astriaorg/astria/releases/tag/v0.6.0--conductor)
- [composer v0.2.1](https://github.com/astriaorg/astria/releases/tag/v0.2.1--composer)
- [sequencer-relayer v0.5.1](https://github.com/astriaorg/astria/releases/tag/v0.5.1--sequencer-relayer)
- [sequencer
  v0.4.1](https://github.com/astriaorg/astria/releases/tag/v0.4.1--sequencer)

Once all of the dependencies have been installed, you can move on to running the
rollup.
