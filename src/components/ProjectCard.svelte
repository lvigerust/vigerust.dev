<script>
	export let title;
	export let description;
	export let thumbnail;
	export let link;
</script>

<a data-svelte-prefetch rel="external" target="_blank" href={link}>
	<div class="max-w-xs cursor-pointer">
		<figure>
			<img
				class="rounded-md shadow-xl lg:hover:scale-105 transition-transform"
				src={thumbnail}
				alt="external url"
			/>
		</figure>
		<div class="card-body items-center pt-4 px-0 sm:px-4">
			<h2 class="card-title font-bold">{title}</h2>
			<p class="text-sm">{description}</p>
		</div>
	</div>
</a>
