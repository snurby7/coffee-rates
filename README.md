# Coffee Rates

This project is just going to be a collection of coffees and where they're from so it can be rated and all that fun.
Similar to untappd, but for coffee since that's something useful to me and I'm sure other coffee fans!

## Project Structure

This project utilizes a [yarn workspace](https://yarnpkg.com/en/docs/workspaces) structure. The idea here is that it will make one central point of iteration.
A workspace structure allows for the sharing of common code across projects. It will also allow for a potential Vue.js/Angular/etc. project to built as well.
The yarn workspace also provides the same optional work to the backend with each option being a new package.

### Adding a package

- Add a folder to the `packages/<my-folder>` directory
- From within `packages/<my-folder>` run `yarn init` and follow the prompts
- If you need to reference another package add `<package-name>` to `dependencies` property in your `/<my-folder>/package.json`

Any new package will get picked up by the root workspace<br>
To view known workspaces run `yarn workspaces info` from the root directory.

## Existing Packages

### `@cr/overnight-server`

This package houses the overnightJs server configuration.

### `@cr/react-client`

This is the react implementation of the coffee rates UI

### `@cr/common`

This is where common interfaces and shared code will live. It allows for easy sharing between the server/client

## Package Manager

[Yarn](https://yarnpkg.com/en/)

## Unit Testing

[Jest](https://jestjs.io/)<br>
[react-testing-library](https://github.com/kentcdodds/react-testing-library)

## Backend/API

[OvernightJS](https://www.npmjs.com/package/@overnightjs/core)<br>

## Database/Storage

Mongo DB Atlas

## Initial Set Up Configuration

```{javascript}
  // packages/cr-common/key/MongoConnection.ts
  export const MongoConnectionUrl = 'mongodb+srv://<username>:<password>@bruns-projects-5dltw.mongodb.net/coffee-rates';
```

## Start coffee

- To start up the project you will need to do the following
- `yarn install` from the root directory
  - may need to also run `yarn install` from the client folder as well
- You should then see OvernightJs running on port 3001 and the UI on port 3000

## Available Scripts

### `yarn start:react`

This will run the react client and use `concurrently` to run the OvernightJS server.

### `yarn start:overnightServer`

This will just spin up the Overnight server. You can spin up the server and use Postman (or similar) to send
calls at the server for testing/development.

### `yarn start:react-client`

This will just spin up the react client. There will be no server, so no API requests will hit the backend unless you
run `yarn start` instead. Useful if you just want to build something in the UI without a server need.

### `yarn test`

This is special. It will use the entire workspace and go to each package and run whatever is in the `package.json` as the `test` script.
Important to note that they must be run without watch mode or else it will stop in the package. This is why the `react-client` has two commands.
