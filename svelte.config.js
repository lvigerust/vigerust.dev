import { preprocessMeltUI } from '@melt-ui/pp'
import sequence from 'svelte-sequential-preprocessor'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components'
		}
	}
}
export default config
