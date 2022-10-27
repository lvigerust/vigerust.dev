<script>
	export let title;
	export let description;
	export let thumbnail;
	export let link;
</script>

<a sveltekit:prefetch rel="external" href={link}>
	<div class="max-w-sm cursor-pointer">
		<figure>
			<img
				class="rounded-lg shadow-xl lg:hover:scale-105 transition-transform"
				src={thumbnail}
				alt="external url"
			/>
		</figure>
		<div class="card-body items-center pt-4">
			<h2 class="card-title">{title}</h2>
			<p class="text-sm">{description}</p>
		</div>
	</div>
</a>
