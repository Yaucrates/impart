<script>
    import ImpartNameLogo from "$lib/logo/ImpartNameLogo.svelte";
</script>

<header class="pt-6 p-10 flex justify-between items-center">
    <div class="gap-8 flex items-center">
        <a href="/"><ImpartNameLogo scale={0.15} /></a>
        <a class="font-medium text-white" href="/">Home</a>
        <a class="font-medium text-white" href="/courses">Courses</a>
        <a class="font-medium text-white" href="/mission">Our Mission</a>
    </div>
    <div class="gap-8 flex items-center">
        <div class="font-medium text-white cursor-not-allowed">Log In</div>
        <div class="px-4 py-2 font-medium rounded-full text-white cursor-not-allowed bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Partner with Us</div>
    </div>
</header>