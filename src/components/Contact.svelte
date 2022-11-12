<script>
	import { fly } from 'svelte/transition';

	let submitted = 'Submit';
	let alert = false;

	function resetButton() {
		setTimeout(
			function () {
				submitted = '✗';
				alert = true;
			},
			1500,
			setTimeout(function () {
				alert = false;
				submitted = 'Submit';
			}, 11500)
		);
	}
</script>

<!-- Main content -->
<div class="hero min-h-screen bg-base-100" id="contact">
	<div class="hero-content text-center">
		<div class="max-w-lg">
			<!-- Title and message -->
			<h1 class="text-5xl font-bold text-primary pb-2">Contact</h1>
			<p class="py-4">
				Got a question or proposal, or just want to say hello? <br /> Please contact me using the form
				below.
			</p>

			<!-- Form -->
			<div class="py-2 px-4 w-full flex flex-col gap-y-2">
				<!-- Name/Business -->
				<div class="form-control ">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">Name/Business</span>
					</label>
					<input
						type="text"
						placeholder="Colonel H. Stinkmeaner"
						class="input input-bordered w-full"
					/>
				</div>
				<!-- Email -->
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="stinkmeaner3000@me.com"
						class="input input-bordered w-full "
					/>
				</div>
				<!-- Message -->
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">Message</span>
					</label>
					<textarea class="textarea textarea-bordered h-40" placeholder="Write your message here" />
				</div>
			</div>
			<!-- Button -->
			<dir class="px-4">
				<!-- href="mailto:l.vigerust@gmail.com" target="_blank" rel="noopener noreferrer" -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<button
					class="btn btn-secondary rounded-lg btn-block"
					on:click={() => (submitted = '')}
					on:click={resetButton}
					class:loading={submitted === ''}>{submitted}</button
				>
			</dir>
		</div>
	</div>
</div>

<!-- ALERT POP-UP -->
{#if alert}
	<div class="container flex justify-center" transition:fly={{ delay: 250, duration: 300, y: 100 }}>
		<div class="alert alert-warning shadow-lg fixed bottom-6 max-w-fit pl-4 pr-12  justify-start">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-current flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="italic">This function is under development! </span>
			</div>

			<a data-svelte-prefetch href="mailto:l.vigerust@gmail.com" rel="noopener noreferrer">
				Please submit your inquiry to <span class="font-semibold">l.vigerust@gmail.com.</span>
			</a>
		</div>
	</div>
{/if}
