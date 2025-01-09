<script lang="ts">
    import Header from '$lib/components/navigation/Header.svelte';
    import MobileNav from '$lib/components/navigation/MobileNav.svelte';
    import Footer from '$lib/components/navigation/Footer.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<Header />
<MobileNav />
{@render children()}
<Footer />