# Pusher & Puller (Smart Contract)

## Installation and Usage

```
npm install
```

To make the pre-commit hook work, you need to run `npm install` when the project is already initialized as a Git repository.

If the project is initialized as a repository later, you need to additionally execute `npm run prepare`.

Also you need to make your own `.env` file from `.env.example` to deploy it to Ropsten Test Network.

### Test smart contracts

```
npm run test
```

### Run local node

```
npm run node
```

### Deploy smart contracts to local node

```
npm run deploy:localhost
```

### Deploy smart contracts to Ropsten Test Network

```
npm run deploy:ropsten
```
