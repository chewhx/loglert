export type LogType = 'success' | 'error' | 'info' | 'warning';

export type LoglertOptions = {
	type?: LogType;
	msg: string;
	showName?: boolean;
	name?: string;
};

export type LoglertOptionsTyped = Omit<LoglertOptions, 'msg' | 'type'>;
