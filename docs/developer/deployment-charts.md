# Deployment Charts

You can deploy the entire Astria stack (including an instance of Celestia) using
the [Astria Deployment Charts](https://github.com/astriaorg/charts).

## Dependencies

Running the Deployment Charts requires the following dependencies:

- [docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
- [just](https://just.systems/man/en/chapter_4.html)

For contract deployment:

- [Forge (part of Foundry)](https://book.getfoundry.sh/getting-started/installation)

For funding via bridge:

- [`astria-go` CLI](./astria-go/astria-go-installation.md)

## Clone the Repo

<!--@include: ../components/_clone-and-run-charts.md-->

## Run a Local Astria Stack

Make sure that Docker is running on your machine!

Use the following commands to run the Astria Stack.

```bash
# create control plane cluster
just deploy cluster

# ingress controller
just deploy ingress-controller

# wait for ingress.
just wait-for-ingress-controller

# Deploys Sequencer + local DA
just deploy astria-local

# Deploys a geth rollup chain + faucet + blockscout + ingress
# w/ defaults running against local network, along with a bridge withdawer.
# NOTE - default values can be found in `helm/rollup/values.yaml`
just deploy rollup

# Deploy only the rollup chain, faucet, blockscout instance without withdrawer:
just deploy dev-rollup
# w/ custom name and id for further customization see the values file at
# `dev/values/rollup/dev.yml`
just deploy dev-rollup <rollup_name> <network_id>

# Send funds into the rollup chain, by default transfers 10 TIA to the rollup
# using prefunded default test sequencer accounts. 
just init rollup-bridge
# Update the amounts to init
just init rollup-bridge <rollup_name> <evm_address> <tia_amount>

# Delete default rollup
just delete rollup
# Delete custom rollup
just delete rollup <rollup_name>

# Delete the entire cluster
just clean

# Delete local persisted data (note: persisted data disabled by default)
just clean-persisted-data
```

By default, running this local rollup will not have any funds, but will be
configured to use the sequencer account bridge.

The default rollup faucet is available at [http://faucet.astria.localdev.me](http://faucet.astria.localdev.me).

If you deploy a custom faucet, it will be reachable at
[http://faucet.<rollup_name>.localdev.me](http://faucet.<rollup_name>.localdev.me).

By default, the faucet is funded by the account that is funded during geth
genesis. This key is defined in `./evm-rollup/values.yaml` and is identical to the
key in `./evm-rollup/files/keys/private_key.txt`.

## Next Steps

Additional details on running the Astria stack via the Helm charts can be found
in the repo README
[here](https://github.com/astriaorg/charts?tab=readme-ov-file#setup).
