<script>
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	onMount(() => {
		animate('.animateLeft', { x: ['-100vw', 0], opacity: [0, 1] }, { delay: 0.25, duration: 1.5 });
		animate('.divider', { opacity: [0, 1] }, { delay: 1.5, duration: 1.5 });
		animate('.animateRight', { x: ['100vw', 0], opacity: [0, 1] }, { delay: 0.25, duration: 1.5 });
	});
</script>

<div
	class="hero min-h-[calc(100vh-82px)] lg:min-h-[calc(100vh-130px)] bg-base-100 px-4 overflow-hidden"
>
	<div class="hero-content text-start">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold text-primary animateTitle">Frontend Developer.</h1>
			<p class="py-8 animateDesc">
				I like to create modern and intuitive interfaces with small details that make up for a <span
					class="font-bold">great</span
				> user experience.
			</p>
			<div class="flex w-full pt-4 pb-8">
				<div class="w-1/2 animateLeft">
					I like robust design systems and progressive enhancement.
				</div>
				<div class="divider divider-horizontal" />
				<div class="w-1/2 animateRight">
					Currently doing Bsc. in Applied Data Technology at OsloMet.
				</div>
			</div>
			<!-- <a href="mailto:l.vigerust@gmail.com" target="_blank" rel="noopener noreferrer">
				<button class="btn btn-secondary  rounded-lg btn-block">Send me an Email</button>
			</a> -->
		</div>
	</div>
</div>
