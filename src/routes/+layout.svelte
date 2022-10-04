<script>
	import '../app.css';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import Info from '../components/Info.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main>
	<Info />
	<slot />
	<Contact />
</main>
<Footer />
