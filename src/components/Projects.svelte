<script>
	import ProjectCard from './ProjectCard.svelte';
	import { onMount } from 'svelte';

	import { animate, stagger, inView } from 'motion';

	onMount(() => {
		let animateCards = document.querySelector('.projects').children;

		animate(animateCards, { x: 500, opacity: 0 });

		inView(
			'.motion-viewport',
			(info) => {
				// console.log('The link  ', info.target.id, ' has entered the viewport');

				animate(
					animateCards,
					{ x: [500, 0], opacity: 1 },
					{
						delay: stagger(0.15),
						duration: 1,
						easing: [0.22, 0.03, 0.26, 1]
					}
				);
			},
			{ amount: 0.5 }
		);
	});
</script>

<div class="hero min-h-screen bg-base-200 py-8 overflow-hidden" id="projects">
	<div class="hero-content text-center">
		<div class="max-w-md md:max-w-7xl motion-viewport">
			<h1 class="text-5xl font-bold text-primary">Projects</h1>
			<p class="pt-6 pb-12 lg:pb-16 max-w-sm sm:max-w-lg mx-auto">
				These are some of my projects. My main ambition is to create intuitive and modern interfaces
				with recognizeable features.
			</p>
			<div class="projects flex flex-wrap gap-x-14 gap-y-4 justify-center">
				<ProjectCard
					title="Movie Database"
					description="Movie database powered by TMDB API to get movie information. Developed with SvelteKit."
					thumbnail="./MovieDatabase.png"
					link="https://stinkmeaner.com"
				/>
				<ProjectCard
					title="Tropicl Apparel"
					description="E-commerce website created for a friend. Developed with React/Next.js - still under development."
					thumbnail="./TropiclApparel.png"
					link="https://tropicl.clothing"
				/>
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
