<script lang="ts">
    import { page } from '$app/state';
    import ChevronRight from '$lib/components/logos/ChevronRight.svelte';
    import Minimize from '$lib/components/logos/Minimize.svelte';
    import { toKebabCase } from '$lib/helpers/toKebabCase';
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();

    let chapterNumber = $state(0);
    let toggleDropdown = $state(false);

    const slug = $derived(page.url.pathname.replace('/(main)', ''));

    const chapters = [
        {
            number: 0,
            name: "Limits and Continuity"
        },
        {
            number: 1,
            name: "Differentiation",
        },
        {
            number: 2,
            name: "Applications of Differentiation",
        },
        {
            number: 3,
            name: "Integrals and their Applications",
        },
        {
            number: 4,
            name: "Integration Techniques",
        },
        {
            number: 5,
            name: "Coordinate Systems and Infinite Series",
        }
    ]
</script>

<div class="h-firstPage flex">
    <div class="p-6 w-80 border-r gap-5 flex flex-col border-neutral-700 overflow-y-scroll">
        <div class="gap-8 flex justify-between items-center">
            <h1 class="text-neutral-100 truncate font-semibold">Single Variable Calculus</h1>
            <Minimize />
        </div>
        <p class="text-neutral-300">You've completed <span class="text-red-500">7%</span> of the course and currently have a grade of <span class="text-green-500">A+</span>.</p>
        <div class="flex flex-col rounded-lg overflow-hidden relative">
            <button onclick={() => { toggleDropdown = !toggleDropdown; }} class="px-4 py-2 gap-4 flex bg-impart-600 hover:bg-impart-700 duration-300 transition-colors">
                <div class="text-neutral-100 text-start truncate">Chapter {chapters[chapterNumber].number}: {chapters[chapterNumber].name}</div>
                <ChevronRight className="{toggleDropdown ? "rotate-90" : "rotate-0"} stroke-white duration-100 transition-all" />
            </button>
            <div class="flex flex-col w-full bg-impart-600 overflow-y-scroll {toggleDropdown || "hidden"}">
                {#each chapters as chapter, i}
                    <button onclick={() => { chapterNumber = i; toggleDropdown = false; } } class="px-4 py-2 gap-4 flex text-start truncate text-neutral-100 bg-impart-600 hover:bg-impart-700 duration-300 transition-colors {i === chapterNumber && "hidden"}">
                        Chapter {chapter.number}: {chapter.name}
                    </button>
                {/each}
            </div>
        </div>
        <hr class="h-[1px] w-full bg-neutral-700 border-neutral-700"/>
        <!-- <div class="flex flex-col">
            {#each units as unit, i}
                <a href="/courses/single-variable-calculus/{toKebabCase(unit)}" class="pr-4 gap-3 border-t flex {slug === `/courses/single-variable-calculus/${toKebabCase(unit)}` ? "bg-blue-500/10 hover:bg-blue-500/20" : "hover:bg-impart-600"} border-neutral-700">
                    <div class="h-full w-1 {slug === `/courses/single-variable-calculus/${toKebabCase(unit)}` && "bg-blue-500"}"></div>
                    <div class="py-4 flex flex-col">
                        <h1 class="uppercase text-sm text-neutral-300 font-medium">Unit {i}</h1>
                        <h2 class="text-neutral-100 font-medium">{unit}</h2>
                    </div>
                </a>
            {/each}
        </div> -->
    </div>
    {@render children()}
</div>