import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = (async (url) => ({
	sections: [
		{ slug: 'transfer', title: 'Transfer' },
		{ slug: 'export', title: 'Export' }
	],
	pathname: url.route.id
})) satisfies LayoutLoad;
