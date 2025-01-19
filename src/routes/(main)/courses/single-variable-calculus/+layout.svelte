<script lang="ts">
    import type { Snippet } from 'svelte';
    import ChevronRight from '$lib/components/logos/ChevronRight.svelte';
    import Minimize from '$lib/components/logos/Minimize.svelte';

    let { children }: { children: Snippet } = $props();

    let currentChapterNumber = $state(0);
    let toggleDropdown = $state(false);

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
    ];

    const lessons = [
        {
            chapterNumber: 0,
        }
    ];
</script>

<svelte:head>
	<title>Impart | Single Variable Calculus</title>
	<meta name="description" content="This course covers differentiation and integration of functions of one variable, and concludes with a brief discussion of infinite series." />
</svelte:head>

<div class="h-firstPage flex">
    <div class="p-6 w-80 border-r gap-5 flex flex-col border-neutral-700 overflow-y-scroll">
        <div class="gap-8 flex justify-between items-center">
            <h1 class="text-neutral-100 truncate font-semibold">Single Variable Calculus</h1>
            <Minimize />
        </div>
        <p class="text-neutral-300">You've completed <span class="text-red-500">7%</span> of the course and currently have a grade of <span class="text-green-500">A+</span>.</p>
        <div class="flex flex-col rounded-lg overflow-hidden relative">
            <button onclick={() => { toggleDropdown = !toggleDropdown; }} class="px-4 py-2 gap-4 flex bg-impart-600 hover:bg-impart-700 duration-300 transition-colors">
                <div class="text-neutral-100 text-start truncate">Chapter {chapters[currentChapterNumber].number}: {chapters[currentChapterNumber].name}</div>
                <ChevronRight className="{toggleDropdown ? "rotate-90" : "rotate-0"} stroke-white duration-100 transition-all" />
            </button>
            <div class="flex flex-col w-full bg-impart-600 overflow-y-scroll {toggleDropdown || "hidden"}">
                {#each chapters as chapter, i}
                    <button onclick={() => { currentChapterNumber = i; toggleDropdown = false; } } class="px-4 py-2 gap-4 text-neutral-100 text-start truncate bg-impart-600 hover:bg-impart-700  duration-300 transition-colors {i === currentChapterNumber && "hidden"}">
                        Chapter {chapter.number}: {chapter.name}
                    </button>
                {/each}
            </div>
        </div>
        <hr class="h-[1px] w-full bg-neutral-700 border-neutral-700"/>
    </div>
    {@render children()}
</div>