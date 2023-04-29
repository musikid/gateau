<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let key: unknown;
</script>

{#key key}
	<div in:fly out:fly>
		<slot />
	</div>
{/key}
