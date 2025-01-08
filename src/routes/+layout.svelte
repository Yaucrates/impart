<script lang="ts">
    import Header from '$lib/components/navigation/Header.svelte';
    import Footer from '$lib/components/navigation/Footer.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />