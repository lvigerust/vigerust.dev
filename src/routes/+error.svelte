<script lang="ts">
	import { page } from '$app/stores'

	let description: string

	switch ($page.status) {
		case 500:
			description = 'Oops! Our server is having a bad day :('
			break

		case 401:
			description = 'Respect my authoritah!'
			break

		default:
			description = "Sorry, we couldn't find the page you're looking for."
			break
	}
</script>

<main
	class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 dark:prose-invert prose prose-gray"
>
	<div class="text-center">
		<p class="text-base font-semibold text-indigo-600 font-Display">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl mb-0">
			{$page.error?.message}
		</h1>
		<p class="mt-6 text-base leading-7">{description}</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href="/"
				class="rounded-md no-underline bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go back home</a
			>
		</div>
	</div>
</main>
