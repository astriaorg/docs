# Withdraw from Flame on Mainnet Alpha

Make sure Foundry is installed:

- See the [Foundry installation
  docs](https://book.getfoundry.sh/getting-started/installation).

Clone and build the `astria-bridge-contracts` repo:

```bash
git clone git@github.com:astriaorg/astria-bridge-contracts.git
cd astria-bridge-contracts
forge build
cp local.env.example .env
```

Open the `.env` file and update the private key and destination chain addresses:

<!-- TODO: update -->
```bash{1,19,23}
PRIVATE_KEY=<your-flame-account-private-key>

RPC_URL="https://rpc.flame.astria.org/"

# the `astriaBridgeSenderAddress` built into the astria-geth node
# in production, the private key for this address must NOT be known.
EVM_BRIDGE_ADDRESS=0xea9d2B36A562ee176c43312397c1b4279ee2343a

### contract call values 

# contract address for AstriaWithdrawer.sol
ASTRIA_WITHDRAWER="0x77Af806d724699B3644F9CCBFD45CC999CCC3d49"

# contract address for AstriaBridgeableERC20.sol
ASTRIA_BRIDGEABLE_ERC20_ADDRESS="0x6e18cE6Ec3Fc7b8E3EcFca4fA35e25F3f6FA879a"

# if withdrawing to the sequencer, this must be set to
# the address to withdraw to on the sequencer
SEQUENCER_DESTINATION_CHAIN_ADDRESS=<your-astria-address>

# if withdrawing to another chain via IBC, this must be set to 
# the destination chain address to withdraw to
ORIGIN_DESTINATION_CHAIN_ADDRESS=<your-celestia-or-noble-address>

# amount to withdraw, must be greater than 10^12
AMOUNT=1000000000000 # 1 utia / uusdc

# account to get erc20 balance of
MINT_TO=0x0b22C4b638A483a9A874713b7d10b9C900108168
```

::: tip
In order to bridge out of Flame on Mainnet you must have a balance of native
funds to pay for gas. This is the `transfer/channel-0/utia` bridged from
Celestia.
:::

To make the following commands easy to copy and paste, export the `RPC_URL`:

```bash
export RPC_URL="https://rpc.flame.astria.org"
```

## To Astria

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be the address of the desired asset you are withdrawing:

- Set to your **Celestia** address to withdraw `TIA`
- Set to your **Noble** address to withdraw `USDC`
- Set to your **Osmosis** address to withdraw `milkTIA`
- Set to your **Stride** address to withdraw `stTIA`
:::

Then run the following command:

```bash
forge script script/AstriaWithdrawer.s.sol:AstriaWithdrawerScript \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToSequencer()" -vvvv
```

## To IBC Chain

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be the address of the desired asset you are withdrawing:

- Set to your **Celestia** address to withdraw `TIA`
- Set to your **Noble** address to withdraw `USDC`
- Set to your **Osmosis** address to withdraw `milkTIA`
- Set to your **Stride** address to withdraw `stTIA`
:::

Then run the following command:

```bash
forge script script/AstriaWithdrawer.s.sol:AstriaWithdrawerScript \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToIbcChain()" -vvvv
```

## View Transactions on [Astrotrek](https://astrotrek.io/)

Go to `https://astrotrek.io/account/<your-astria-account>?tab=transactions`
to see the withdrawal transactions. You can also search the returned transaction
hash directly in [Astrotrek](https://astrotrek.io/).

## View Transactions on [Mintscan](https://www.mintscan.io/)

If you bridge out to an IBC chain, you can view your transactions by visiting
the following:

- `https://www.mintscan.io/celestia/address/<your-celestia-address>`
- `https://www.mintscan.io/noble/address/<your-noble-address>`
- `https://www.mintscan.io/osmosis/address/<your-osmosis-address>`
- `https://www.mintscan.io/stride/address/<your-stride-address>`

You can also go directly to [Mintscan](https://www.mintscan.io/) and search for
the `txhash` that is returned after sending your transaction, but it is
recommended to view your address transaction history as this will show if an
acknowledgement for your transfer was received.

## Check your Balances

<!--@include: ../../components/_check-mainnet-balances.md-->
