# Meteor HTTP Interceptor

Intercepts HTTP calls and allows fake implementations to take over entire domains. 

This fork uses the [meteorhacks:picker](https://github.com/meteorhacks/picker) for server side routing instead of the [iron:router](https://github.com/iron-meteor/iron-router). This way it is compatible for use with [kadira:flow-router](https://github.com/kadirahq/flow-router).

## Usage

Add the package to your project: `meteor add stijndepestel:http-interceptor`

## Forked from

This repository is based on the meteor package [xolvio:http-interceptor](https://github.com/xolvio/meteor-http-interceptor).
