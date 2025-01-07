<script lang="ts">
    import X from "$lib/components/logos/X.svelte";
    import Menu from "$lib/components/logos/Menu.svelte";

    let expanded = $state(false);

    const toggle = () => {
        expanded = !expanded;
    };
</script>

<button onclick={toggle} aria-label="menu">
    <Menu />
</button>

<div 
    role="button" 
    tabindex="0"
    onclick={toggle} 
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class="fixed top-0 left-0 w-full h-full transition-colors duration-300 cursor-default z-50 {expanded ? 'bg-black/40' : 'bg-transparent pointer-events-none'}"
>
    <div
        role="button" 
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={() => {}} 
        class="px-10 py-6 w-full min-[320px]:w-80 h-full gap-4 flex flex-col fixed top-0 right-0 bg-impart-background overflow-y-auto transform transition-transform duration-500 cursor-auto {expanded ? 'translate-x-0' : 'translate-x-full'}"
    >
        <div class="w-full flex justify-end">
            <button onclick={toggle}><X /></button>
        </div>
        <div class="w-full gap-8 flex flex-col justify-center">
            <a class="text-white" href="/">Home</a>
            <a class="text-white" href="/courses">Courses</a>
            <a class="text-white" href="/mission">Our Mission</a>
            <div class="text-white cursor-not-allowed">Log In</div>
            <div class="w-fit px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed">Partner with Us</div>
        </div>
    </div>
</div>
