<script>
    import ImpartNameLogo from "../logos/ImpartNameLogo.svelte";
</script>

<footer class="p-4 py-16 gap-4 flex flex-col justify-center items-center border-t-[1px] border-neutral-700">
    <ImpartNameLogo scale={0.12} />
    <p class="text-neutral-300 text-sm text-center">We make education accessible to anyone anywhere anytime.</p>
    <div class="gap-4 flex flex-wrap justify-center items-center">
        <a class="text-sm text-neutral-300" href="/">Home</a>
        <a class="text-sm text-neutral-300" href="/courses">Courses</a>
        <a class="text-sm text-neutral-300" href="/mission">Our Mission</a>
        <a class="text-sm text-neutral-300" href="/login">Log In</a>
        <div class="w-fit px-4 py-2 text-sm rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed">Partner with Us</div>
    </div>
    <p class="text-neutral-300 text-sm text-center">Copyright © 2025 - All rights reserved</p>
</footer>