<script>
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="hero min-h-screen bg-base-200 py-12">
	<div class="hero-content text-center">
		<div class=" max-w-4xl">
			<h1 class="text-5xl font-bold text-primary">Projects</h1>
			<p class="pt-6 pb-16 max-w-xl mx-auto">
				These are some of my projects. My main ambition is to create intuitive and modern interfaces
				with recognizeable features.
			</p>
			<div class="projects flex flex-wrap gap-x-14 gap-y-6 justify-center">
				<ProjectCard
					title="Movie Database"
					description="Movie database powered by TMDB API to get movie information. Developed with SvelteKit."
					thumbnail="./MovieDatabase.png"
					link="https://stinkmeaner.com"
				/>
				<ProjectCard
					title="Tropicl Apparel"
					description="E-commerce website created for a friend. Developed with React/Next.js - still under development.
                "
					thumbnail="./TropiclApparel.png"
					link="https://tropicl.clothing"
				/>
				<ProjectCard
					title="temperatur.live"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quaerat!
                "
					thumbnail="./temperatur.live.png"
					link="https://temperatur.live"
				/>
			</div>
		</div>
	</div>
</div>
