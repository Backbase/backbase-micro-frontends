# Legacy as remote

Angular 14 shell with journeys and Angular 12 remote with widgets.

* [remote](angular12)
* [shell](shell)

## Development Setup

### Connect to repo.backbase.com

You need access to [repo.backbase.com](https://repo.backbase.com/) for installing the dependencies. Once you have it you 
can follow the [set-up-web-development](https://backbase.io/developers/documentation/web-devkit/getting-started/set-up-web-development/) 
guide to configure npm.

### Installing dependencies

To install dependencies, run the following command in each directory:

```bash
$ npm i
```

### Accessing Sandbox
[proxy.env.conf.js](shell/proxy.env.conf.js) is configured to access the [EBP Sandbox](https://backbase.io/ebp-sandbox), 
so you can request a key by sending a mail to [api-sandbox-support@backbase.com](mailto:api-sandbox-support@backbase.com).

## Getting Started

### Development server

Run `npm start` in each directory, this will serve both the shell and remote apps.

* [localhost:4200](http://localhost:4200/) (shell)
* [localhost:4202](http://localhost:4202/) (remote)

### Mock server

You can skip authentication but still see data using our [mock-server](../mock-server). In this case, after starting the 
mock-server, run `npm run start:mocks` in each directory.
