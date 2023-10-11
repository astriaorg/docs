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

You can then use `cast` to view the blocks on your rollup.

```sh
# replace <your_rollup_name> with the name you used in your configuration
export ETH_RPC_URL=http://executor.<your_rollup_name>.localdev.me/
cast block 0
```

Which should print something like this:

```sh
baseFeePerGas        1000000000
difficulty           10000000
extraData            0x
gasLimit             8000000
gasUsed              0
hash                 0xa2d5f000ef275b5f6ce6af5a0de50c17e5893c5ea664b77f534eb62f317caff1
logsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
miner                0x0000000000000000000000000000000000000000
mixHash              0x0000000000000000000000000000000000000000000000000000000000000000
nonce                0x0000000000000000
number               0
parentHash           0x0000000000000000000000000000000000000000000000000000000000000000
receiptsRoot         0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421
sealFields           []
sha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
size                 512
stateRoot            0xc1a913facf57b18de72d25155293c53b2a463d93a1de735269410b8663f2efca
timestamp            0
withdrawalsRoot
totalDifficulty      10000000
transactions:        []
```
