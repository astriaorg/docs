# Test Transactions

## Configure the Testing Script

To run the test transactions script you will need `Foundry`:
- Foundry: https://book.getfoundry.sh/getting-started/installation

In a new terminal window, clone and configure the evm test transactions repo:

```bash
git clone --recurse-submodules git@github.com:astriaorg/astria-web3.git
cd astria-web3
git checkout local-evm
cd packages/evm-test-data/
forge install
cp .env.example .env
```

Open the `.env` file and update the chain id and private key. The chain id
should match the `"chainId"` value in the `geth-genesis-local.json` file in the
`astria-geth` repo. The private key used here should be the private key for the
account you used when [setting up
Geth](./run-local-rollup-and-sequencer.md#setup-a-geth-rollup) previously:

```bash
# this value should be the same as what you used for configuring Geth above
CHAIN_ID=<6 digit number>
PRIVATE_KEY=<your account private key>
```

## Run the Testing Script

```bash
just generate-transactions
```

You will see the transactions going through in both the `forge` script and the
log windows in the `astria-go` cli.

:::tip
The test script sends transactions directly to the local rollup running on your
machine. Thus, the transactions will work regardless of whether you are running
everything locally with `astria-go dev run --local` or if you are running
against a remote sequencer with `astria-go dev run --remote`. 
:::

## Common Issues

### `EvmError: OutOfFunds`

If you see a an `OutOfFunds` error when running the testing script, this means
that your rollup genesis account was not configured correctly. To fix this
issue:
1. Go back to the `astria-geth` repo.
2. Run `cast w new` to create a new rollup account.
3. Add the new address to the `geth-genesis-local.json` under `"alloc"`.
4. Restart your rollup with `just clean-restart`.
5. Update the `PRIVATE_KEY` env var in the test transactions repo with the
   private key from the new account.
6. Rerun the testing script.

### Test script hangs

If you are running against a remote sequencer and the transactions test script
hangs, navigate to the cli TUI and look at the logs for the Composer. You will
likely see an error that contains `sequencer rejected the transaction ...
insufficient funds for asset`. This means that the sequencer account that was
created was either improperly configure or not funded correctly. To fix this
issue:
1. Stop the `astria-go` cli.
2. Create a new sequencer account with `astria-go sequencer createaccount` or
   use an existing account if you already have one for testing, and fund the
   account using the [Sequencer
   Faucet](https://faucet.sequencer.dusk-5.devnet.astria.org/).
3. Make sure the `ASTRIA_COMPOSER_PRIVATE_KEY` env var in the
   `~/.astria/default/config-remote/.env` is the private key for your funded
   sequencer account.
4. Re-launch the cli with `astria-go dev run --remote`.
5. Rerun the transactions testing script.

### Chain Data Mismatch

If you start seeing warning in Composer that say `failed getting latest nonce
from sequencer` or errors in Conductor that say `first latest height from
sequencer was bad`, this likely means that block data on your rollup and the
block data coming from whatever sequencer you are using (either local or remote)
are mismatched. To fix this issue:
1. Stop your rollup and the cli.
2. Restart the rollup with `just clean-restart` and restart the cli with the run
   conditions you were using.

This will clean the data your rollup and allow it to resync.

If issues still persist, you can clean the data for the rollup and the sequencer
(if you are running a local sequencer):
1. Stop your rollup and the cli.
2. With the cli run `astria-go dev clean` then `astria-go dev init`.
3. Restart the rollup with `just clean-restart`.
4. Restart the cli with `astria-go dev run`.
