# Ng2-Filters
External pipes (filters as called in Angular 1) for Angular 2 template engine

# Installation

1- via NPM
```
npm install ng2-filters
```

2- via Yarn
```
yarn add ng2-filters
```

# Setup

- You can add pipes globally to your app, in your `app.module.ts` file:

```typescript
import { CapitalizePipe } from 'ng2-filters';

@NgModule({
  declarations: [
    CapitalizePipe
  ],
  ...
})
```

- Or you can add per component:

```typescript
import { CapitalizePipe } from 'ng2-filters';

@Component({
  pipes: [ CapitalizePipe ]
})
```

# Usage

The cool thing about Angular pipes is that they are easy to use, here's an example:

```
<p>{{ user.name | capitalize }}</p>
```

And that's it! wait for Angular to render the results and keep your eye on the console in case some error occurred.

# List of Pipes

Here's a list of availabe pipes:
  - `capitalize`: it will turn every first letter in a word into a capital letter (the expected value is `String` type, other than that an error will be raised)

  - `tofixed`: based on the [`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method (Default decimals number is 2, the expected value is `Number` type, other than that an error will be raised)

  - `substr`: based on the [`substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) medthod (the expected value is `String` type, other than that an error will be raised))

  - `total`: it will return the total for an array of numbers (An error will be raised if one value is not type `Number`)

  - `qoute`: it will add a qoutation mark to the value (It will turn the given value into a `String`)

# License
This project is under the MIT license.
