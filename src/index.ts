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