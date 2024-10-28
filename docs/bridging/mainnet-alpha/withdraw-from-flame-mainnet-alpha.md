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

### Withdraw TIA

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be your Celestia address.
:::

```bash
forge script script/AstriaWithdrawer.s.sol:AstriaWithdrawerScript \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToSequencer()" -vvvv
```

### Withdraw USDC

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be your Nobel address.
:::

```bash
forge script script/AstriaBridgeableERC20.s.sol:AstriaBridgeableERC20Script \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToSequencer()" -vvvv
```

## To Celestia

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be your Celestia address.
:::

```bash
forge script script/AstriaWithdrawer.s.sol:AstriaWithdrawerScript \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToIbcChain()" -vvvv
```

## To Nobel

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be your Nobel address.
:::

```bash
forge script script/AstriaBridgeableERC20.s.sol:AstriaBridgeableERC20Script \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToIbcChain()" -vvvv
```

## Check your Balances on Celestia and Nobel

### Celestia Balance

<!-- TODO: update -->
```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=!!!--chain-id !!!

```

### Nobel Balance

<!-- TODO: update -->
```bash
nobled query bank balances $NOBLE_ADDRESS --node !!!

```
