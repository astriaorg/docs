---
sidebar_position: 5
---

# Shutting Down the Cluster

## Deleting Specific Rollups

To delete a specific rollup deployment, you can use the following command:
```bash
just delete-rollup <ROLLUP_NAME>
```

This will remove the rollup, its block explorer, and faucet, but keep the rest
of the cluster running.

## Shutting Down the Whole Cluster

If you just want to shut everything down, you can run:
```bash
just clean
```

To delete all the data that may have also been created during your testing, you
can then run:

```bash
just clean-persisted-data
```

Which will delete all the local data created.
