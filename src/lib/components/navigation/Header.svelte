<script>
    import ImpartNameLogo from "$lib/components/logos/ImpartNameLogo.svelte";
    import MobileNav from "./MobileNav.svelte";
</script>

<header class="py-6 px-10 flex justify-between items-center border-b-[1px] border-neutral-700">
    <div class="gap-8 flex items-center">
        <a href="/"><ImpartNameLogo scale={0.15} /></a>
        <a class="font-medium text-white hidden lg:block" href="/">Home</a>
        <a class="font-medium text-white hidden lg:block" href="/courses">Courses</a>
        <a class="font-medium text-white hidden lg:block" href="/mission">Our Mission</a>
    </div>
    <div class="gap-8 flex items-center">
        <div class="font-medium text-white cursor-not-allowed hidden lg:block">Log In</div>
        <div class="px-4 py-2 font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed hidden lg:block">Partner with Us</div>
        <div class="block lg:hidden text-white"><MobileNav /></div>
    </div>
</header>