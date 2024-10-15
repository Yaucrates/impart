<script>
    import Header from "$lib/components/Navigation/Header.svelte";
</script>

<div class="h-full flex flex-col">
    <Header />
    <div class="flex-grow">
        <slot />
    </div>
</div>