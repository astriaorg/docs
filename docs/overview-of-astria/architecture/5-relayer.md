---
sidebar_position: 5
---

# Relayer

The Relayer's responsibility is to take validated blocks from the sequencer and pass them along to both the Conductor and the DA layer. Because the sequencer's block times are much faster than those of the DA, the relayer also collects a queue of sequencer blocks before wrapping them for submission to DA.

The individual sequencer blocks are sent immediately to the Conductor to enable fast finality for an improved UX and also act as soft commits for the execution layer. The collections of blocks sent to the DA layer are used as a source of truth and are ultimately pulled from the DA to be used as firm commits for finality in the rolllups.
