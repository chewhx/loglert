# loglert

> Log and print messages with levels and style

- Adapted from [cli-alerts](https://www.npmjs.com/package/cli-alerts) by Ahmad Awais
- Supports types for your typescript projects
- Print the styled log message as string to in your own logger - `.print`
- Convenient methods to log message levels: `.success` , `.info`, `.warning`, `.error`
- Smaller package size: less than 6kB

# Install

```bash
npm install loglert
```

# Usage

```javascript
import { loglert } from 'loglert';

loglerts.success(`Update successful!`);
```

# API

## loglert(options)

```javascript
loglert({ msg: 'Updating info', type: 'success', name: 'DONE' });
```

### options

#### msg

Type: `string`

Required: true

#### type?

Type: `'success' | 'error' | 'info' | 'warning'`

Default: `'info'`

#### showName?

Type: `boolean`

Default: true

#### name?

Type: `string`

Default: 'INFO'

## loglert.success('message', opts)

Logs a success type message.

## loglert.error('message',opts)

Logs an error type message.

## loglert.info('message',opts)

Logs an info type message.

## loglert.warning('message',opts)

Logs a warning type message.

## loglert.print('message',opts)

Returns a string of the type message. You may use this string in your own logger.

### opts

#### showName?

Type: `boolean`

Default: true

#### name?

Type: `string`

Default: 'INFO'

# License

ISC ©️ Chew Han Xiang

# Author

**Chew Han Xiang**

- [https://www.chewhx.com/](https://www.chewhx.com/)
- [https://github.com/chewhx](https://github.com/chewhx)
- [https://www.linkedin.com/in/chewhx/](https://www.linkedin.com/in/chewhx/)
