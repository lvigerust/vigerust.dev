<script>
	import '../app.css';
	import Filler from '../components/Filler.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
	<Filler />
</main>
<Footer />
