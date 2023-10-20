---
sidebar_position: 5
---

# FAQ and Debugging

## Debug Ingress

If you would like to view the ingress logs you can use the following:

```bash
kubectl get po -n ingress-nginx
# get the name of one of the pods
export INGRESS_POD_1=ingress-nginx-controller-6d6559598-ll8gv
# view the logs
kubectl logs $INGRESS_POD_1 -n ingress-nginx
```

## Verify Your Loadbalancer

If you want to verify your loadbalancer with an external IP you can do the
following.

After you have deployed your ingress controller with `kubectl apply`, run the
following command and then `curl` the external IP:

```bash
kubectl get svc -n ingress-nginx
```

```bash
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   34.118.228.98   34.42.184.206   80:31623/TCP,443:31357/TCP   57s
ingress-nginx-controller-admission   ClusterIP      34.118.229.71   <none>          443/TCP                      57s
```

:::note
If you are using AWS you will be given a URL instead of an IP.
:::

```bash
# use the EXTERNAL-IP from the result above
curl 34.42.184.206 
```

```html
<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```
