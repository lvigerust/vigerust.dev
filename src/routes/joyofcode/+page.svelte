<script lang="ts">
	let show = false
	let content = ''

	function greet(element: HTMLElement, content: string) {
		// console.log('Hi')

		const greetEvent = new CustomEvent('greet', { detail: 'Hi' })
		element.dispatchEvent(greetEvent)

		element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000, fill: 'forwards' })

		return {
			update(content: string) {
				console.log({ content })
			},

			destroy() {
				console.log('Bye!')
			}
		}
	}

	function handleGreet(event: CustomEvent) {
		console.log(event.detail)
	}
</script>

<label>
	<input bind:checked={show} type="checkbox" />
	Toggle
</label>

<br />

{#if show}
	<input bind:value={content} />

	<div on:greet={handleGreet} use:greet={content}>Action</div>
{/if}
