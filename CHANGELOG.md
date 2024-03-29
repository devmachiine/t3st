### change type: f / x / m / p
* **f**eature
* fi**x**
* **m**aintenance
* **p**erformance

## 2020.11.3

* **m** Update readme. Add test coverage doc.

## 2020.10.30

* **f** Add includes file filter pattern.
* **x** Find async test origin
* **x** Exclude validation cause from stacktrace evaluation

## 2020.10.24

* **f** Add jsmodule function to import javascript modules that have .js extension

## 2020.10.19

* **f** Add support for mjs tests
* **f** Cli multiple filter line endings

### 2020.10.18

* **f** Add inline throws as validation function
* **m** Clean up parse file error output
* **m** Reduce equal(lhs,rhs) error output
* **m** Elaborate check error reason
* **m** Indent JSON stringify uses
* **m** Unify error source output
* **m** Throws gives usage hint for empty or partial arguments

### 2020.10.16

* **x** Unhandled promise rejection sets non-zero exit code
* **x** Fix to display details when javascript error in file
* **m** Improve check function output

### 2020.10.14
* **x** Rename affirm to check
* **f** Check function also accepts all parameters as boolean

### 2020.10.3
* **x** Set error exitcode if no tests found 

### 2020.9.17
* **f** Add `throws` test function

### 2020.9.1
* **m** Replace `assert` & `alike` functions with `equal`
* **f** Pass additional options via watch mode

### 2020.8.21
* **f** Add `-f` to filter which files to test.

### 2020.8.20
* **m** Make gen reference path relative

### 2020.8.19
* **f** Add `-v` option to display version number.

### 2020.8.18
* **p** `-w` Cache dependency checking.
* **p** Remove promise as test body.

### 2020.8.17
* **f** Add `-w` command to watch for changes and rerun tests.
* **f** Add `-gen <filename> [--ref]` command to generate test and/or referenced file.
* **f** Add optional cli argument `-n` or `--noisy` to display noisy test run info.

### 2020.8.12

* **m** Move directory to command line argument: `-d test_dir` *or* `--dir test_dir`
* **f** Add cli command: `help`
* **f** Add optional cli argument `-c` or `--clear` that clears console before running.

### 2020.8.6

* **f** Add optional cli argument `-s` or `--silent` that stops logging to console (only exit code set).

### 2020.8.5

* **m** Remove boolean test body so that all other tests in file still give feedback.

### 2020.7.29

* **m** Remove optional test continuation function

### 2020.7.28

* **f** Give verbose stacktrace, not only origin
* **m** Assertion errors throw with stack
* **m** Remove optional results label

### 2020.7.27

* **x** Add null check to async error catch
* **m** Change bool test message

### 2020.7.26

 * **f** Add hint: missing await for async test
 * **m** Remove emeraldwalk .vscode as default live test runner

### 2020.7.25

 * **f** Add hint: missing test function in test file.

 ### 2020.7.25

 * **m** Replace Object.prototype.hasOwnProperty.call with Object.hasOwn