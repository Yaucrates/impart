<script>
    import ImpartNameLogo from "$lib/components/logos/ImpartNameLogo.svelte";
    import Menu from "../logos/Menu.svelte";
    import { mobileNavState } from "./MobileNavState.svelte";

    const toggle = () => {
        mobileNavState.expanded = !mobileNavState.expanded;

        if (mobileNavState.expanded) {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
    }
</script>

<header class="sticky top-0 py-6 px-10 flex justify-between items-center border-b-[1px] border-neutral-700 backdrop-blur">
    <div class="gap-8 flex items-center">
        <a href="/"><ImpartNameLogo scale={0.15} /></a>
        <a class="font-medium text-white hidden lg:block" href="/">Home</a>
        <a class="font-medium text-white hidden lg:block" href="/courses">Courses</a>
        <a class="font-medium text-white hidden lg:block" href="/mission">Our Mission</a>
    </div>
    <div class="gap-8 flex items-center">
        <a class="font-medium text-white hidden lg:block" href="/login">Log In</a>
        <div class="px-4 py-2 font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed hidden lg:block">Partner with Us</div>
        <button onclick={toggle} class="block lg:hidden text-white py-2" aria-label="menu">
            <Menu />
        </button>
    </div>
</header>