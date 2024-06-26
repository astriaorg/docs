This requires `Go` and `just` to be installed on your system.

- Go: <https://go.dev/doc/install>
- just: <https://github.com/casey/just>

```bash
git clone git@github.com:astriaorg/astria-cli-go.git
cd astria-cli-go
just build-cli

# run the cli in the repo directory
just run version

# OR you can move the binary to a location in your PATH if you'd like
mv ./bin/astria-go /usr/local/bin/
astria-go version
```
