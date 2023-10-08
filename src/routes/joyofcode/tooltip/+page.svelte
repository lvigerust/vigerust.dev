<script lang="ts">
	import tippy, { type Props } from 'tippy.js'
	import 'tippy.js/dist/tippy.css'

	type Options = Partial<Props>

	let content = 'Tooltip'

	function tooltip(element: HTMLElement, options: Options) {
		const tooltip = tippy(element, options)

		return {
			update(options: Options) {
				tooltip.setProps(options)
			},
			destroy() {
				tooltip.destroy()
			}
		}
	}
</script>

<div>
	<input bind:value={content} />

	<button use:tooltip={{ content }}>Hover</button>
</div>
