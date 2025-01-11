<script lang="ts">
    import X from "$lib/components/logos/X.svelte";
    import { toKebabCase } from "$lib/helpers/toKebabCase";

    let {
        disable,
        image,
        title,
        instructor,
        prerequisites,
        description,
    }: { 
        disable: Boolean,
        image?: {
            src?: string,
            alt?: string,
        },
        title: string, 
        instructor: string,
        prerequisites: string,
        description: string,
    } = $props();

    let expanded = $state(false);

    const toggle = () => {
        expanded = !expanded;

        if (expanded) {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
    };
</script>

<div 
    role="button" 
    tabindex="0" 
    aria-expanded={expanded} 
    onclick={toggle} 
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class="w-60 xs:w-80 h-96 row-span-1 overflow-hidden flex flex-col justify-between rounded-xl bg-impart-700 shadow-input transition duration-200"
>
    {#if image}
        <img src={image.src} alt={image.alt} />
    {:else}
        <div class="text-white bg-impart-800 h-1/2 flex items-center justify-center">
            No Image Currently
        </div>
    {/if}
    <div class="p-5 h-1/2 transition duration-200 flex flex-col gap-3">
        <div class="text-lg uppercase font-bold text-neutral-200">
            {title}
        </div>
        <div class="text-xs font-normal text-neutral-300">
            {description === "" ? "This is a planned course for the future" : description}
        </div>
    </div>
</div>

<div 
    role="button" 
    tabindex="0"
    onclick={toggle}
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class="fixed top-0 left-0 w-full h-full {expanded ? 'bg-black/40' : 'bg-transparent pointer-events-none'} transition-colors duration-300 cursor-default"
>
    <div
        role="button" 
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={() => {}} 
        class="p-6 w-full min-[448px]:w-[28rem] h-full gap-4 flex flex-col fixed top-0 right-0 bg-impart-background overflow-y-auto transform transition-transform duration-500 cursor-auto {expanded ? 'translate-x-0' : 'translate-x-full'}"
    >
        <div class="w-full flex justify-end">
            <button onclick={toggle}><X stroke="white" /></button>
        </div>
        <img src={image ? image.src : "coursePlaceholderImage.jpg"} alt={image ? image.alt : "Course Banner Placeholder"} class="rounded-xl"/>
        <div class="w-full mt-6">
            <h1 class="font-light text-white text-3xl mb-2">{title}</h1>
            <p class="font-light text-sm text-neutral-300">with {instructor}</p>
            {#if disable}
                <div class="w-44 h-12 my-6 flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold rounded-md cursor-not-allowed">
                    Enroll
                </div>
            {:else}
                <a href="/courses/{toKebabCase(title)}" class="w-44 h-12 my-6 flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold rounded-md">
                    Enroll
                </a>
            {/if}
            {#if prerequisites}
                <p class="font-light text-sm text-neutral-400">Prerequisites: {prerequisites}</p>
            {/if}
        </div>
        <hr class="border-neutral-700 w-full"/>
        <div class="gap-4 flex flex-col">
            <h2 class="font-medium text-xl text-white">About the Course</h2>
            
            <p class="font-light text-sm text-neutral-400">{description === "" ? "This is a planned course for the future" : description}</p>
        </div>
    </div>
</div>
