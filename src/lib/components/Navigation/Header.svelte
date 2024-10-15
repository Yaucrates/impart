<script>
    import { getUser } from "$lib/pocketbase/user.svelte";
    import Signout from "../Auth/Signout.svelte";
    import MobileNav from "./MobileNav.svelte";

    const user = getUser();
</script>
<header class="w-full px-8 xs:px-20 py-12 h-20 flex justify-center items-center">
    <div class="w-full max-w-screen-lg flex justify-between">
        <ul class="w-full md:w-fit gap-12 flex justify-between md:justify-center items-center">
            <li><a href="/" class="text-xl font-medium">Impart</a></li>
            <li class="hidden md:block"><a href="/courses" class="font-light hover:text-neutral-300 transition-all duration-300">Courses</a></li>
            <li class="block md:hidden"><MobileNav /></li>
        </ul>
        <ul class="gap-12 hidden md:flex justify-center items-center">
            <li>
                {#if user.user}
                    <Signout/>
                {:else}
                    <a href="/signup" class="block font-light hover:text-neutral-300 transition-all duration-300">Sign Up</a>
                {/if}
            </li>
            <li><div class="w-44 h-12 flex justify-center items-center bg-blurple-800 hover:bg-blurple-900 transition-all duration-300 font-semibold rounded-md cursor-not-allowed">
                Partner with Us
            </div></li>
        </ul>
    </div>
</header>