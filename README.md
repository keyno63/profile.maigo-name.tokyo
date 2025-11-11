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

In the First time, Use `fly launch`

- website
```
cd website
flyctl launch
```

use deploy setting fly.toml.

- backend
```
cd backend
flyctl launch --dockerfile ./Dockerfile
```

Re-deploy, Use `fly deploy`

```
fly deploy
```

- db

```
cd db
flyctl launch --dockerfile ./Dockerfile
```

Re-deploy, Use `fly deploy`

```
fly deploy
```

## LICENSE

Licensed under the [Apache License Version2](./LISENCE)
