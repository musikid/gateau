export interface Cookie {
	name: string;
	value: string;
	expires?: number;
	maxAge?: number;
	domain?: string;
	path?: string;
	secure?: boolean;
	httpOnly?: boolean;
	sameSite?: string;
}
