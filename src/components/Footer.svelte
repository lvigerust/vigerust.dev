<script>
	import { copy } from 'svelte-copy';

	let message = 'Copy';

	let delay = 500;

	function changeMessage() {
		setTimeout(function () {
			message = 'Copy';
		}, delay);
	}
</script>

<footer class="footer footer-center p-12 bg-base text-base-content">
	<div>
		<p
			class:selected={message === 'Copy'}
			on:click={() => (message = 'Copied to clipboard')}
			on:mouseleave={changeMessage}
			class="text-xs font-[Roboto] leading-5 tooltip  cursor-pointer"
			data-tip={message}
			use:copy={'929 885 767'}
		>
			Copyright © 2022 Vigerust Webutvikling. All rights reserved. <br /> Org nr.: 929 885 767
		</p>
	</div>
</footer>
