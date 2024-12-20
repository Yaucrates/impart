<script>
    import ImpartNameLogo from "$lib/logo/ImpartNameLogo.svelte";
</script>

<header class="pt-6 p-10 flex justify-between items-center">
    <div class="gap-10 flex items-center">
        <a href="/"><ImpartNameLogo scale={0.15} /></a>
        <button class="text-neutral-200 hover:text-white text-lg transition-colors duration-300">Courses</button>
        <a class="text-neutral-200 hover:text-white text-lg transition-colors duration-300" href="/mission">Our Mission</a>
    </div>
    <div class="gap-8 flex items-center">
        <a href="/login" class="text-neutral-200 hover:text-white text-lg transition-colors duration-300">Login</a>
        <div class="px-4 py-2 rounded-3xl cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white text-lg transition-colors duration-300">
            Partner with Us
        </div>
    </div>
</header>