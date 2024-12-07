<script>
    import Header from "$lib/components/navigation/Header.svelte";
    let { children } = $props();
</script>

<div class="h-full flex flex-col">
    <Header />
    <div class="flex-grow">
        {@render children()}
    </div>
</div>