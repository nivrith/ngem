ngen
====

CLI Utility tool for Angular Development

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ngen.svg)](https://npmjs.org/package/ngen)
[![CircleCI](https://circleci.com/gh/Polyrithm/ngen/tree/master.svg?style=shield)](https://circleci.com/gh/Polyrithm/ngen/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/ngen.svg)](https://npmjs.org/package/ngen)
[![License](https://img.shields.io/npm/l/ngen.svg)](https://github.com/Polyrithm/ngen/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ngen
$ ngen COMMAND
running command...
$ ngen (-v|--version|version)
ngen/0.0.0 darwin-x64 node-v8.12.0
$ ngen --help [COMMAND]
USAGE
  $ ngen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ngen generate [FILE]`](#ngen-generate-file)
* [`ngen hello [FILE]`](#ngen-hello-file)
* [`ngen help [COMMAND]`](#ngen-help-command)

## `ngen generate [FILE]`

describe the command here

```
USAGE
  $ ngen generate [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate.ts](https://github.com/Polyrithm/ngen/blob/v0.0.0/src/commands/generate.ts)_

## `ngen hello [FILE]`

describe the command here

```
USAGE
  $ ngen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ngen hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Polyrithm/ngen/blob/v0.0.0/src/commands/hello.ts)_

## `ngen help [COMMAND]`

display help for ngen

```
USAGE
  $ ngen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
