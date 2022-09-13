import { green, blue, red, yellow } from 'chalk';
import symbols from 'log-symbols';
import { LogType, LoglertOptions, LoglertOptionsTyped } from './types';

const logColor = {
	success: green,
	error: red,
	warning: yellow,
	info: blue,
};

const printName = (type: LogType, name: string) => {
	return ' ' + logColor[type].inverse(` ${name} `);
};

const printLog = ({ msg, name, type, showName }: LoglertOptions) => {
	const _type = type ?? 'info';
	const _name = name ?? _type.toUpperCase();
	const _showName = showName ?? true;
	return `\n${symbols[_type]}${_showName ? printName(_type, _name) : ''} ${logColor[_type](msg)}\n`;
};

export const loglert = (opts: LoglertOptions) => console.log(printLog(opts));

loglert.print = (opts: LoglertOptions) => printLog(opts);

loglert.success = (msg: string, options?: LoglertOptionsTyped) =>
	loglert({ msg, type: 'success', ...options });

loglert.info = (msg: string, options?: LoglertOptionsTyped) =>
	loglert({ msg, type: 'info', ...options });

loglert.error = (msg: string, options?: LoglertOptionsTyped) =>
	loglert({ msg, type: 'error', ...options });

loglert.warning = (msg: string, options?: LoglertOptionsTyped) =>
	loglert({ msg, type: 'warning', ...options });

// loglert({ msg: 'Hello world', type: 'error' });
// loglert({ msg: 'Hello world', type: 'warning' });
// loglert({ msg: 'Hello world', type: 'info' });

// loglert({ msg: 'Hello world', showName: false, type: 'success' });
// loglert({ msg: 'Hello world', showName: false, type: 'error' });
// loglert({ msg: 'Hello world', showName: false, type: 'warning' });
// loglert({ msg: 'Hello world', showName: false, type: 'info' });

// loglert.success('Hello world', { name: 'Done' });
// loglert.success('Hello world', { showName: false });
// loglert.error('Hello world', { name: 'Wrong!' });
// loglert.error('Hello world', { showName: false });
// loglert.warning('Hello world', { name: 'Watch out' });
// loglert.warning('Hello world', { showName: false });
// loglert.info('Hello world', { name: 'fyi' });
// loglert.info('Hello world', { showName: false });
loglert({ msg: 'hello loglert', type: 'success' });
