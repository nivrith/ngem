ngem
====

CLI Utility tool for Angular Development

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ngem.svg)](https://npmjs.org/package/ngem)
[![CircleCI](https://circleci.com/gh/Polyrithm/ngem/tree/master.svg?style=shield)](https://circleci.com/gh/Polyrithm/ngem/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/ngem.svg)](https://npmjs.org/package/ngem)
[![License](https://img.shields.io/npm/l/ngem.svg)](https://github.com/Polyrithm/ngem/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @nivrith/ngem
$ ngem COMMAND
running command...
$ ngem (-v|--version|version)
@nivrith/ngem/0.0.23 darwin-x64 node-v8.12.0
$ ngem --help [COMMAND]
USAGE
  $ ngem COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ngem autocomplete [SHELL]`](#ngem-autocomplete-shell)
* [`ngem commands`](#ngem-commands)
* [`ngem generate:component [NAME]`](#ngem-generatecomponent-name)
* [`ngem generate:interceptor [NAME]`](#ngem-generateinterceptor-name)
* [`ngem generate:resolver [NAME]`](#ngem-generateresolver-name)
* [`ngem help [COMMAND]`](#ngem-help-command)
* [`ngem init [FILE]`](#ngem-init-file)
* [`ngem is:online [FILE]`](#ngem-isonline-file)
* [`ngem make:component [NAME]`](#ngem-makecomponent-name)
* [`ngem make:directive [NAME]`](#ngem-makedirective-name)
* [`ngem make:filter [NAME]`](#ngem-makefilter-name)
* [`ngem make:service [NAME]`](#ngem-makeservice-name)
* [`ngem update [CHANNEL]`](#ngem-update-channel)

## `ngem autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ngem autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ngem autocomplete
  $ ngem autocomplete bash
  $ ngem autocomplete zsh
  $ ngem autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `ngem commands`

list all the commands

```
USAGE
  $ ngem commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.2/src/commands/commands.ts)_

## `ngem generate:component [NAME]`

describe the command here

```
USAGE
  $ ngem generate:component [NAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate/component.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/generate/component.ts)_

## `ngem generate:interceptor [NAME]`

Generate Angular Interceptor

```
USAGE
  $ ngem generate:interceptor [NAME]

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ ngem gi
  $ ngem g:i
```

_See code: [src/commands/generate/interceptor.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/generate/interceptor.ts)_

## `ngem generate:resolver [NAME]`

Generate Angular Resolver

```
USAGE
  $ ngem generate:resolver [NAME]

OPTIONS
  -a, --all
  -h, --help  show CLI help

ALIASES
  $ ngem gr
  $ ngem g:r
```

_See code: [src/commands/generate/resolver.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/generate/resolver.ts)_

## `ngem help [COMMAND]`

display help for ngem

```
USAGE
  $ ngem help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `ngem init [FILE]`

Initialize ngem in your project

```
USAGE
  $ ngem init [FILE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/init.ts)_

## `ngem is:online [FILE]`

Check if you are connected to the internet

```
USAGE
  $ ngem is:online [FILE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/is/online.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/is/online.ts)_

## `ngem make:component [NAME]`

Create an AngularJs Component

```
USAGE
  $ ngem make:component [NAME]

OPTIONS
  -f, --flat           create component without subfolder
  -h, --help           show CLI help
  -m, --module=module  name of the module
  -n, --name=name      name of the component
  -o, --open           Open the generated file

ALIASES
  $ ngem mc
  $ ngem m:c
```

_See code: [src/commands/make/component.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/make/component.ts)_

## `ngem make:directive [NAME]`

describe the command here

```
USAGE
  $ ngem make:directive [NAME]

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  name of the directive

ALIASES
  $ ngem md
  $ ngem m:d
```

_See code: [src/commands/make/directive.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/make/directive.ts)_

## `ngem make:filter [NAME]`

describe the command here

```
USAGE
  $ ngem make:filter [NAME]

OPTIONS
  -f, --force
  -h, --help           show CLI help
  -m, --module=module  Name of the AngularJs Module
  -n, --name=name      name of the filter

ALIASES
  $ ngem mf
  $ ngem m:f
```

_See code: [src/commands/make/filter.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/make/filter.ts)_

## `ngem make:service [NAME]`

describe the command here

```
USAGE
  $ ngem make:service [NAME]

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  name of the service

ALIASES
  $ ngem md
  $ ngem m:s
```

_See code: [src/commands/make/service.ts](https://github.com/nivrith/ngem/blob/v0.0.23/src/commands/make/service.ts)_

## `ngem update [CHANNEL]`

update the ngem CLI

```
USAGE
  $ ngem update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
