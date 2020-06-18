# TypeScript 101

This is a basic playground to work on my typescript skills.

## What is TypeScript ?

- A superset of Javascript
- Allows us to use stric types
- Supports modern features (arrow functions, let, const)
- Extra feactures (tuples, inteerfaces, generic, etc)

### What you should already know?

- Javascript
  - Arrow functions
  - The DOM
  - Classes

## Install

Install typescript globally in the system using `npm i -g typescript`.

This will install the typescript compiler globally in your system.
You can then use `tsc` to compile your typescript files.

### Compiling TypeScript

The proper way to compile a typescript file is:

```shell
tsc input.ts output.js
```

The above command will convert (compile) the code in `input.ts` file, which is a typescript file, into vanillaJS in `output.js`.

In case your input and output files have the same name, and only differ in the extension, then you can use the shorthand to compile the `.ts` file like so:

```shell
tsc sandbox.ts
```

The above line will compile `sandbox.ts` into `sandbox.js`.

Eveerytime we make a change in `.ts` file, we need to manually compile it to convert it to `.js`. It would be nice if this could be done automatically, right?

This is easy to do, we just need to a the `-w` flag in the compile command, like so:

```shell
tsc sandbox.ts -w
```

The `-w` flag stands for `watch`, which will listen to the changes in your `.ts` file and run the `tsc` command based on any changes.
