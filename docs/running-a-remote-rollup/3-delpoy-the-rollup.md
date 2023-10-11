---
sidebar_position: 3
---

# Deploying the Rollup

In another directory, use the [Astria dev-cluster](https://github.com/astriaorg/dev-cluster), deploy
the local environment where your rollup will run.

```sh
git clone git@github.com:astriaorg/dev-cluster.git
cd dev-cluster
just create-cluster
just deploy-ingress-controller
just wait-for-ingress-controller
```

Then create the address and key information for a new sequencer account.

```sh
cargo run --release -- sequencer account create
```

The address, public and private keys will be different from those below. Save
these values for later use.

```
Create Sequencer Account

Private Key: "5562f2a6e97c01098e2ae2d64d10189716e44d36b1f2f2151695856689981622"
Public Key:  "ec2059fc6c4cb1b29b24b75116afa88072d8dd2fcf4659b672d0301cfc74f613"
Address:     "8a2f9c31b064b62b6154ace29bfb3498b0825f68"
```

Then deploy the configuration:

```sh
cargo run --release -- rollup config deploy
    --filename <your_rollup_name>-rollup-conf.yaml \
    --sequencer-private-key <sequencer_private_key>
```
