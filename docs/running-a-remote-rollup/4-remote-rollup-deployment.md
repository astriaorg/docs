---
sidebar_position: 4
---

# Remote Rollup Deployment

## Creating a Rollup on Digital Ocean K8s

The following assumes you are using [Digital Ocean Kubernetes
(DOKS)](https://www.digitalocean.com/products/kubernetes).

:::warning
You must use at least a 2 node cluster.
:::

### Manually setup Digital Ocean Ingress

Follow the steps here to setup the nginx ingress controller:
- https://marketplace.digitalocean.com/apps/nginx-ingress-controller

Follow the steps here to add your own domain:
- https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/

Follow the steps here to set up an `A` record for DNS:
- https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records

:::note
When configure=ing the `A` record for DNS, the `directs to` value should specify the `loadbalancer` which was created for the `nginx-ingress-controller` using the console. 
:::
