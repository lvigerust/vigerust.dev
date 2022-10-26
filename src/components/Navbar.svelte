<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { theme, darkTheme, lightTeme } from '$lib/stores/themes';

	onMount(() => {
		themeChange(false);
	});

	function clickOutside(node) {
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	let previousY = 0;
	let currentY = 0;
	let clientHeight = 0;

	const deriveDirection = (y) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};

	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;

	let darkActive = false;
	if ($theme === darkTheme) {
		darkActive = true;
	} else {
		darkActive = false;
	}
</script>

<svelte:window bind:scrollY={currentY} />

<div
	class="sticky-glass-navbar"
	class:motion-safe:-translate-y-[var(--header-with-margin)]={offscreen}
	class:lg:motion-safe:-translate-y-[var(--header-with-margin-lg)]={offscreen}
	bind:clientHeight
>
	<div class="navbar px-4 lg:px-8 lg:min-h-[5rem]">
		<div class="navbar-start">
			<div class="dropdown md:hidden">
				<label for="" tabindex="0" class="btn btn-ghost btn-circle opacity-80 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					use:clickOutside
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3.5 p-2 shadow bg-primary font-[Poppins] rounded-box w-52"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Projects</a></li>
				</ul>
			</div>
			<a
				href="/"
				class="btn btn-ghost rounded-full hidden md:flex normal-case text-base lg:text-lg opacity-90  "
				>VIGERUST</a
			>
		</div>
		<div class="navbar-center flex md:hidden">
			<a href="/" class="btn btn-ghost normal-case text-base opacity-90">VIGERUST</a>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal p-0 hidden md:flex font-[Poppins] normal-case opacity-80">
				<li>
					<a class="btn btn-ghost font-normal normal-case" href="/">Home</a>
				</li>
				<li><a class="btn btn-ghost font-normal normal-case" href="/">About</a></li>

				<li>
					<a class="btn btn-ghost font-normal normal-case mr-2" href="/">Projects</a>
				</li>
			</ul>
			<label class="swap swap-rotate btn-ghost btn-circle opacity-75">
				<!-- this hidden checkbox controls the state -->
				<input
					type="checkbox"
					data-toggle-theme="{darkTheme},{lightTeme}"
					data-act-class="ACTIVECLASS"
					id="theme-toggle"
				/>

				{#if darkActive}
					<!-- moon icon -->
					<svg
						class="swap-off fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					>

					<!-- sun icon -->
					<svg
						class="swap-on fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					>
				{:else}
					<!-- moon icon -->
					<svg
						class="swap-on fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					>

					<!-- sun icon -->
					<svg
						class="swap-off fill-current w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					>
				{/if}
			</label>
		</div>
	</div>
</div>
