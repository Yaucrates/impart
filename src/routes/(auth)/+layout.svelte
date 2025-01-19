<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import ImpartNameLogo from '$lib/components/logos/ImpartNameLogo.svelte';
    import '../../app.css';
    import Footer from '$lib/components/navigation/Footer.svelte';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<main class="min-h-screen pb-20 flex flex-col items-center">
    <header class="w-full max-w-screen-lg pb-20 p-8 gap-6 flex items-center">
        <a href="/"><ImpartNameLogo scale={0.15}/></a>
        <hr class="w-full h-px bg-white"/>
        <p class="text-white text-3xl">+</p>
    </header>

    {@render children()}
</main>
<Footer />