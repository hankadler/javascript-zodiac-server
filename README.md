# Zodiac

Serves React app for determining Western | Chinese zodiac

## Setup

### Node

This code uses ES6+ ``import/export`` syntax. To prevent errors do the following:

- When executing directly:

```sh
NODE_OPTIONS=--experimental-specifier-resolution=node NODE_NO_WARNINGS=1 node index.js
```

- When executing through IDE, include environment variables in run/debug configurations:

```sh
NODE_OPTIONS=--experimental-specifier-resolution=node;NODE_NO_WARNINGS=1  # run config
NODE_OPTIONS=--experimental-vm-modules;NODE_NO_WARNINGS=1  # test config
```

## Usage

```sh
npm i  # install dependencies
npm start  # run app
```
