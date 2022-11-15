# TS Calculator
Library that makes possible evaluating math expressions with
functions, constants and radix numbers easily, and 100% safe

-- Feel free with making feature suggestions and open issues if you find a bug!

## Installation
```sh
$ npm install @luminate_d/tscalculator
```

## Usage

```ts
import { Lexer, Parser, CalculatorError } from '@luminate_d/tscalculator';

const input = 'cos(pi) * 0xff + 2^8'; // Your expression

try {
  const expression = new Parser(
          new Lexer(input).tokenize()
  ).parse();

  const result = expression.eval(); // 1
  console.log('Result:', result);
} catch(error: CalculatorError) {
  if(error instanceof RuntimeError) {
    console.log('Failed to eval:', error.message);
  } else console.log('Error at character index', error.index);
}
```

## Errors
- UnknownConstantError / UnknownFunctionError occurs when unknown name provided
- ParseError occurs when invalid expression provided and it cannot be parsed
  - Has `.index` property that shows index of character where error occurred

## Available constants
- PI, E, EPI (e^pi), LN2, LN10, LOG2E, LOG10E, PHI, PSI, P

## Available functions
- sin
- cos
- tg, tan
- ctg, cotan
- sec, sc
- csc, cosec
- sinh
- cosh
- th, tanh
- cth, coth
- sech, sch
- csch, cosech
- asin
- acos
- asinh
- acosh
- versin
- exp
- gd
- floor
- ceil
- round
- abs
- sqrt
- crt
- cbrt
- ln
- log - can be called like `log(100, 10)` - log 100 by base 10, defaults base to `E`
- tetrate
- rad - degrees to radians
- deg - radians to degrees
- log2
- log10
- log1p
- trunc
- random

## Syntax
- Constant: `pi` or `PI` - Case insensitive, name of any constant, will be replaced by its value
- Add: `x + y`: x/y = constant or number (or function expression `sin(x) + y`)
- Subtract: `x - y`
- Multiply: `x * y`
- Divide: `x / y`
- Power: `x ^ y`
- Mod: `x % y`
- Function: `sin(x)`
- Factor: `x!`
- Double Factor: `x!!`
- Subfactor: `!x`
- Radix Numbers:
  - `0b10` - Binary (`0b`) representation of `2`
  - `0o15` - Octal (`0o`) representation of `13`
  - `0xff` - Binary (`0x`) representation of `255`
