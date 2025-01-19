# Bridging on Astria

Bridging between Astria and other networks.

## Fee payments

With the Astria Sequencing Layer, transaction data touches three different
chains: the sequencer chain, the data availability chain, and the rollup chain.
Each of these requires a fee payment for DoS prevention. If each chain requires
a different token for fee payment, this causes a poor UX. Many rollups built on
Ethereum allow for bridged ETH to be used to pay fees, alleviating UX concerns,
as users only need to obtain one, widely-available token (ETH).

We can do something similar with the sequencer network. Assuming the data
availability network’s token is the most easily accessible and established, we
can bridge the DA token to the sequencer network to use as fee payment, and also
bridge the DA token to the rollup via the usual rollup bridging (deposit
derivation) method. In our case, this means bridging TIA (Celestia) to Astria
via IBC, and allowing it to be used for fee payments. Then, a rollup can
optionally choose to accept (IBC-)TIA as a token for fee payments as well.

## Rollup Bridging

To bridge tokens to a rollup built on Astria, the rollup needs to add the
ability to derive deposit transactions from the sequencer or DA network. In
general, rollup deposits work as follows:

On the L1, tokens are transferred to some escrow account/contract.
The rollup consensus node, which derives the L2 transactions from L1 data, sees
these deposits, and includes a corresponding “deposit” transaction in the next
L2 block, which is a distinct transaction type.
The L2 node executes these deposit transactions, minting synthetic funds on the
L2 to the respective account.
A rollup on Astria would have to implement something like this to bridge from
the sequencer/DA to it.

Bridging back to the L1 requires proving rollup block state roots on the L1.
This is the “optimistic” or “ZK” parts of the rollup. To implement bridging from
a rollup on Astria back to the sequencer or DA network, we need to add
functionality to verify rollup state rollups on them. On the sequencer, this
would mean enshrining some sort of state root verification actor in the
sequencer’s state machine, which could be instantiated by the rollup and used to
bridge to the sequencer. Since we’re using Celestia as DA, which does not
support any sort of programmability, the only way to bridge from the rollup to
Celestia would be first through the sequencer, then back to Celestia through
IBC.

## IBC

IBC (inter-blockchain communication) is a standard used by Cosmos/CometBFT
chains to pass messages between each other in a trust-minimized way. Since
Astria uses CometBFT, it is IBC-enabled and able to bridge tokens between other
IBC-enabled chains. To see more details about IBC, see the spec.

Celestia is also IBC-enabled, and we expect to bridge TIA from Celestia to
Astria for fee payments.
