<script lang="ts">
    import { page } from '$app/state';
    import Minimize from '$lib/components/logos/Minimize.svelte';
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();

    const slug = $derived(page.url.pathname.replace('/(main)', ''));
</script>

<div class="h-firstPage flex">
    <div class="p-6 w-80 border-r flex flex-col border-neutral-700 overflow-y-scroll">
        <div class="flex justify-end"><Minimize /></div>
        <div class="flex flex-col">
            <a href="/courses/single-variable-calculus" class="pr-4 gap-3 border-b flex hover:bg-blue-500/30 border-neutral-700">
                <div class="h-full w-1 {slug === "/courses/single-variable-calculus" && "bg-blue-500"}"></div>
                <div class="py-4 flex flex-col">
                    <h1 class="text-neutral-100 text-lg font-semibold">Single Variable Calculus</h1>
                    <p class="text-neutral-300 text-sm">10 UNITS - <span class="text-red-500">0% Completed</span></p>
                </div>
            </a>
            {#each {length: 10} as _, i}
                <a href="/courses/single-variable-calculus/{i}" class="pr-4 gap-3 border-b flex hover:bg-blue-500/30 border-neutral-700">
                    <div class="h-full w-1 {slug === `/courses/single-variable-calculus/${i}` && "bg-blue-500"}"></div>
                    <div class="py-4 flex flex-col">
                        <h1 class="uppercase text-sm text-neutral-300 font-medium">Unit {i}</h1>
                        <h2 class="text-neutral-100 font-medium">Limits and Continuity</h2>
                    </div>
                </a>
            {/each}
        </div>
    </div>
    {@render children()}
</div>