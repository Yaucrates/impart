<script lang="ts">
    import X from "./Logos/X.svelte";

    let { disable = false,
        title,
        instructor,
        bannerDescription = "This is a planned course for the future",
        modalDescription 
    }: { 
        disable?: Boolean, 
        instructor: string,
        title: string, 
        bannerDescription?: string,
        modalDescription?: string
    } = $props();

    let expanded = $state(false);

    const toggle = () => {
        expanded = !expanded;
    };
</script>

<div 
    role="button" 
    tabindex="0" 
    aria-expanded={expanded} 
    onclick={toggle} 
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class={`${disable ? "cursor-default" : "cursor-pointer"} w-60 xs:w-80 h-96 row-span-1 overflow-hidden flex flex-col justify-between rounded-xl bg-[#252930] shadow-input transition duration-200`}
>
    <div class="bg-[#1d1e23] h-1/2 flex items-center justify-center">
        No Image Currently
    </div>
    <div class="p-5 h-1/2 transition duration-200 flex flex-col gap-3">
        <div class="text-lg uppercase font-bold text-neutral-600 dark:text-neutral-200">
            {title}
        </div>
        <div class="text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {bannerDescription}
        </div>
    </div>
</div>

<div 
    role="button" 
    tabindex="0"
    onclick={toggle} 
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class={`fixed top-0 left-0 w-full h-full ${expanded ? 'bg-black/40' : 'bg-transparent pointer-events-none'} transition-colors duration-300 cursor-default`}
>
    <div
        role="button" 
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={() => {}} 
        class={`p-6 w-full min-[448px]:w-[28rem] h-full gap-4 flex flex-col fixed top-0 right-0 bg-impart-background overflow-y-auto transform transition-transform duration-500 cursor-auto ${expanded ? 'translate-x-0' : 'translate-x-full'}`}
    >
        <div class="w-full flex justify-end">
            <button onclick={toggle}><X /></button>
        </div>
        <img src="coursePlaceholderImage.jpg" alt="Course Banner Placeholder" class="rounded-xl"/>
        <div class="w-full mt-6">
            <h1 class="font-light text-3xl mb-2">{title}</h1>
            <p class="font-light text-sm text-neutral-300">with {instructor}</p>
            <div class={`w-44 h-12 my-6 hidden md:flex justify-center items-center bg-blurple-800 hover:bg-blurple-900 transition-all duration-300 font-semibold rounded-md ${disable ? "cursor-not-allowed" : ""}`}>
                Enroll
            </div>
        </div>
        <hr class="border-neutral-700 w-full"/>
        <div class="gap-2 flex flex-col">
            <h2 class="font-medium text-xl text-white">About the Course</h2>
            <p class="font-base text-sm text-neutral-400">
                {modalDescription ?? bannerDescription}
            </p>
        </div>
    </div>
</div>
