<script>
	import ProjectCard from './ProjectCard.svelte';
	import { onMount } from 'svelte';

	import { animate, stagger, inView } from 'motion';

	onMount(() => {
		inView('.animate-each-card', (info) => {
			animate('.animate-each-card', { y: [100, 0] }, { delay: stagger(0.175) });
		});
	});
</script>

<div class="hero min-h-screen bg-base-200 lg:py-12">
	<div class="hero-content text-center">
		<div class="max-w-md md:max-w-7xl ">
			<h1 class="text-5xl font-bold text-primary">Projects</h1>
			<p class="pt-6 pb-16 max-w-sm sm:max-w-lg mx-auto">
				These are some of my projects. My main ambition is to create intuitive and modern interfaces
				with recognizeable features.
			</p>
			<div class="projects flex flex-wrap gap-x-14 gap-y-4 justify-center">
				<div class="animate-each-card">
					<ProjectCard
						title="Movie Database"
						description="Movie database powered by TMDB API to get movie information. Developed with SvelteKit."
						thumbnail="./MovieDatabase.png"
						link="https://stinkmeaner.com"
					/>
				</div>
				<div class="animate-each-card">
					<ProjectCard
						title="Tropicl Apparel"
						description="E-commerce website created for a friend. Developed with React/Next.js - still under development."
						thumbnail="./TropiclApparel.png"
						link="https://tropicl.clothing"
					/>
				</div>
				<div class="animate-each-card">
					<ProjectCard
						title="temperatur.live"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quaerat!"
						thumbnail="./temperatur.live.png"
						link="https://temperatur.live"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
