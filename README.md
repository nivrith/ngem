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
$ npm install -g @polyrithm/ngen
$ ngen COMMAND
running command...
$ ngen (-v|--version|version)
@polyrithm/ngen/0.0.23 darwin-x64 node-v10.13.0
$ ngen --help [COMMAND]
USAGE
  $ ngen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ngen bombard [FILE]`](#ngen-bombard-file)
* [`ngen generate:component [NAME]`](#ngen-generatecomponent-name)
* [`ngen autocomplete [SHELL]`](#ngen-autocomplete-shell)
* [`ngen commands`](#ngen-commands)
* [`ngen generate:interceptor [NAME]`](#ngen-generateinterceptor-name)
* [`ngen generate:resolver [NAME]`](#ngen-generateresolver-name)
* [`ngen help [COMMAND]`](#ngen-help-command)
* [`ngen is-up [FILE]`](#ngen-is-up-file)
* [`ngen is:online [FILE]`](#ngen-isonline-file)
* [`ngen make:component [NAME] [ARTIFACT]`](#ngen-makecomponent-name-artifact)
* [`ngen make:directive [FILE]`](#ngen-makedirective-file)
* [`ngen make:filter [NAME]`](#ngen-makefilter-name)
* [`ngen update [CHANNEL]`](#ngen-update-channel)

## `ngen autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ngen autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ngen autocomplete
  $ ngen autocomplete bash
  $ ngen autocomplete zsh
  $ ngen autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `ngen commands`

list all the commands

```
USAGE
  $ ngen commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.2/src/commands/commands.ts)_

## `ngen bombard [FILE]`

describe the command here

```
USAGE
  $ ngen bombard [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/bombard.ts](https://github.com/Polyrithm/ngen/blob/v0.0.10/src/commands/bombard.ts)_

## `ngen generate:component [NAME]`

describe the command here

```
USAGE
  $ ngen generate:component [NAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate/component.ts](https://github.com/Polyrithm/ngen/blob/v0.0.10/src/commands/generate/component.ts)_

## `ngen generate:interceptor [NAME]`

Generate Angular Interceptor

```
USAGE
  $ ngen generate:interceptor [NAME]

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ ngen gi
  $ ngen g:i
```

_See code: [src/commands/generate/interceptor.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/generate/interceptor.ts)_

## `ngen generate:resolver [NAME]`

Generate Angular Resolver

```
USAGE
  $ ngen generate:resolver [NAME]

OPTIONS
  -a, --all
  -h, --help  show CLI help

ALIASES
  $ ngen gr
  $ ngen g:r
```

_See code: [src/commands/generate/resolver.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/generate/resolver.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `ngen is-up [FILE]`

describe the command here

```
USAGE
  $ ngen is-up [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/is-up.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/is-up.ts)_

## `ngen is:online [FILE]`

Check if you are connected to the internet

```
USAGE
  $ ngen is:online [FILE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/is/online.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/is/online.ts)_

## `ngen make:component [NAME] [ARTIFACT]`

Create an AngularJs Component

```
USAGE
  $ ngen make:component [NAME] [ARTIFACT]

OPTIONS
  -f, --flat           create component without subfolder
  -h, --help           show CLI help
  -m, --module=module  name of the module
  -n, --name=name      name of the component
  -o, --open           Open the generated file

ALIASES
  $ ngen mc
  $ ngen m:c
```

_See code: [src/commands/make/component.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/make/component.ts)_

## `ngen make:directive [FILE]`

describe the command here

```
USAGE
  $ ngen make:directive [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the directive

ALIASES
  $ ngen md
  $ ngen m:d
```

_See code: [src/commands/make/directive.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/make/directive.ts)_

## `ngen make:filter [NAME]`

describe the command here

```
USAGE
  $ ngen make:filter [NAME]

OPTIONS
  -f, --force
  -h, --help           show CLI help
  -m, --module=module  Name of the AngularJs Module
  -n, --name=name      name of the filter

ALIASES
  $ ngen mf
  $ ngen m:f
```

_See code: [src/commands/make/filter.ts](https://github.com/Polyrithm/ngen/blob/v0.0.23/src/commands/make/filter.ts)_

## `ngen update [CHANNEL]`

update the ngen CLI

```
USAGE
  $ ngen update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.4/src/commands/update.ts)_
<!-- commandsstop -->
