# To reproduce errors

## Setup project

Create an empty project

```sh
mkdir knex-cli-ts-errors
cd knex-cli-ts-errors
npm init -y
```

Install dependencies

```sh
npm i knex
npm i -D sqlite3 typescript @types/node
```

Initialize TypeScript

```sh
tsc --init
```

Initialize knex using TypeScript extension option

```sh
npx knex init -x ts
```

Update `knexfile.ts`

```ts
module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
};
```

---

## Error with `migrate:make` 🚨

```sh
npx knex migrate:make create_example_table
Failed to load external module ts-node/register
Failed to load external module typescript-node/register
Failed to load external module typescript-register
Failed to load external module typescript-require
Failed to load external module @babel/register
sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs http://knexjs.org/#Builder-insert).
Created Migration: /knex-cli-ts-errors/migrations/20200416104822_create_example_table.ts
```

## Error with `migrate:up` 🚨

```sh
npx knex migrate:up
Failed to load external module ts-node/register
Failed to load external module typescript-node/register
Failed to load external module typescript-register
Failed to load external module typescript-require
Failed to load external module @babel/register
sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs http://knexjs.org/#Builder-insert).
/knex-cli-ts-errors/migrations/20200416104822_create_example_table.ts:1
import * as Knex from "knex";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:1072:16)
    at Module._compile (internal/modules/cjs/loader.js:1122:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Module.require (internal/modules/cjs/loader.js:1044:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at FsMigrations.getMigration (/knex-cli-ts-errors/node_modules/knex/lib/migrate/sources/fs-migrations.js:81:12)
    at /knex-cli-ts-errors/node_modules/knex/lib/migrate/Migrator.js:146:69
    at arrayFilter (/knex-cli-ts-errors/node_modules/lodash/lodash.js:582:11)
```
