<script>
    import ImpartNameLogo from "../logos/ImpartNameLogo.svelte";
</script>

<footer class="py-16 gap-4 flex flex-col justify-center items-center border-t-[1px] border-neutral-700">
    <ImpartNameLogo scale={0.12} />
    <p class="text-neutral-300 text-sm">We make education accessible to anyone anywhere anytime.</p>
    <div class="gap-4 flex justify-center items-center">
        <a class="text-sm text-neutral-300 hidden lg:block" href="/">Home</a>
        <a class="text-sm text-neutral-300 hidden lg:block" href="/courses">Courses</a>
        <a class="text-sm text-neutral-300 hidden lg:block" href="/mission">Our Mission</a>
        <div class="text-sm text-neutral-300 cursor-not-allowed hidden lg:block">Log In</div>
        <div class="w-fit px-4 py-2 text-sm rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed hidden lg:block">Partner with Us</div>
    </div>
    <p class="text-neutral-300 text-sm">Copyright © 2025 - All rights reserved</p>
</footer>