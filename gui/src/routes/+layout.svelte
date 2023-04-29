<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import PageTransition from '../lib/components/PageTransition.svelte';

	export let data: LayoutData;
</script>

<div class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle hidden" checked />
	<div class="drawer-content flex flex-col items-center justify-center">
		<PageTransition key={data.pathname}>
			<slot />
		</PageTransition>
	</div>
	<div class="drawer-side">
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			{#each data.sections as item}
				<li>
					<a href="/{item.slug}" class:active={data.pathname?.endsWith(item.slug)}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
