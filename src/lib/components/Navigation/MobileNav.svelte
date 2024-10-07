<script lang="ts">
    import X from "$lib/components/Logos/X.svelte";
    import Menu from "$lib/components/Logos/Menu.svelte";

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
        This is empty
    </div>
</div>
