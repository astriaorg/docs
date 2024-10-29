# Withdraw from Flame on `dusk` Devnet

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

```bash{1,19,23}
PRIVATE_KEY=<your-flame-account-private-key>

RPC_URL="https://rpc.evm.dusk-11.devnet.astria.org/"

# the `astriaBridgeSenderAddress` built into the astria-geth node
# in production, the private key for this address must NOT be known.
EVM_BRIDGE_ADDRESS=0xa7183eFD1e1fb81595009376f9643f54474933CD

### contract call values 

# contract address for AstriaWithdrawer.sol
ASTRIA_WITHDRAWER="0xA58639fB5458e65E4fA917FF951C390292C24A15"

# contract address for AstriaBridgeableERC20.sol
ASTRIA_BRIDGEABLE_ERC20_ADDRESS="0xa4f59B3E97EC22a2b949cB5b6E8Cd6135437E857"

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
In order to bridge out of Flame on `dusk` you must have a balance of native
funds to pay for gas. This is the `nria` bridged from Astria.
:::

To make the following commands easy to copy and paste, export the `RPC_URL`:

```bash
export RPC_URL="https://rpc.evm.dusk-11.devnet.astria.org/"
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
to be your Noble address.
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

## To Noble

::: info
Make sure the `ORIGIN_DESTINATION_CHAIN_ADDRESS` in your `.env` file is updated
to be your Noble address.
:::

```bash
forge script script/AstriaBridgeableERC20.s.sol:AstriaBridgeableERC20Script \
   --rpc-url $RPC_URL --broadcast --sig "withdrawToIbcChain()" -vvvv
```

## Check your Balances on Celestia and Noble

### Celestia Balance

```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4

```

### Noble Balance

```bash
nobled query bank balances $NOBLE_ADDRESS --node https://noble-testnet-rpc.polkachu.com:443

```
