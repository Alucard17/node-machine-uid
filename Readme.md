[![CI](https://github.com/Alucard17/node-machine-uid/actions/workflows/ci.yml/badge.svg)](https://github.com/Alucard17/node-machine-uid/actions/workflows/ci.yml)

# node-machine-uid

`node-machine-uid` is a Node.js library for generating machine-unique identifiers. This library is a fork of the popular [node-machine-id](https://github.com/automation-stack/node-machine-id) library, with modifications to fix an issue on Windows where reading the registry is disabled due to access rights. `node-machine-uid` uses the [registry-js](https://github.com/desktop/registry-js) library to get the machine ID on Windows, which does not require the use of `reg.exe`.

**Cross-platform unique machine (desktop) id discovery**

## Use cases

- Software restrictions
- Installation tracking

## Features

- Hardware independent
- Unique within the OS installation
- No elevated rights required
- No external dependencies and does not require any native bindings
- Cross-platform (OSx, Win, Linux)

## Installation

To install `node-machine-uid` in your project, run:

bashCopy code

`$ npm install node-machine-uid`

## Usage

#### To use `node-machine-uid`:

```js
import machineId from "node-machine-uid"

const id = machineId()

console.log(id)
```

This will output a unique 64 character identifier in the following format:
`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

On Windows, `node-machine-uid` uses `registry-js` to get the machine ID, which does not require the use of `reg.exe`. Instead, it generates a unique ID based on the computer name and the processor architecture.

## Contributing

Contributions to `node-machine-uid` are welcome! If you would like to contribute, please follow these steps:

1.  Fork the repo.
2.  Create a new branch for your feature/bugfix.
3.  Write tests for your changes.
4.  Implement your changes.
5.  Run the tests to make sure everything passes.
6.  Submit a pull request.

## License

`node-machine-uid` is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for more information.

## Acknowledgments

The `node-machine-uid` library is a fork of the [node-machine-id](https://github.com/automation-stack/node-machine-id) library. Special thanks to the original authors for creating such a useful library!

`node-machine-uid` also uses the [registry-js](https://github.com/desktop/registry-js) library to get the machine ID on Windows. Thank you to the `registry
