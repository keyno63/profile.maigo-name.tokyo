# profile.maigo-name.tokyo

## DEPLOY

deploy to [fly.io](https://fly.io)

### setup

Use `flyctl`. To install below.
```
# Mac/Linux
curl -L https://fly.io/install.sh | sh
```

```
# Windows
iwr https://fly.io/install.ps1 -useb | iex
```

### login

```
flyctl auth login
```

### deploy

- website
```
cd website
flyctl launch
```

use deploy setting fly.toml.

## LICENSE

Licensed under the [Apache License Version2](./LISENCE)
