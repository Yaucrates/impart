<script lang="ts">
    import X from "$lib/components/logos/X.svelte";
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

<div 
    role="button" 
    tabindex="0"
    onclick={toggle} 
    onkeydown={(e) => e.key === 'Enter' && toggle()} 
    class="fixed top-0 right-0 w-full h-full transition-colors duration-300 cursor-default z-[60] {mobileNavState.expanded ? 'bg-black/40' : 'bg-transparent pointer-events-none'}"
>
    <div
        role="button" 
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={() => {}} 
        class="px-10 py-6 w-full min-[320px]:w-80 h-full gap-4 flex flex-col fixed top-0 right-0 bg-impart-background overflow-y-auto transform transition-transform duration-500 cursor-auto {mobileNavState.expanded ? 'translate-x-0' : 'translate-x-full'}"
    >
        <div class="w-full flex justify-end">
            <button onclick={toggle} class="text-white"><X /></button>
        </div>
        <div class="w-full gap-8 flex flex-col justify-center">
            <a class="text-white" href="/">Home</a>
            <a class="text-white" href="/courses">Courses</a>
            <a class="text-white" href="/mission">Our Mission</a>
            <a class="text-white cursor-not-allowed" href="/login">Log In</a>
            <div class="w-fit px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 cursor-not-allowed">Partner with Us</div>
        </div>
    </div>
</div>
