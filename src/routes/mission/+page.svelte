<script>
    import BlockoMotioningRight from "$lib/components/blocko/BlockoMotioningRight.svelte";
</script>

<svelte:head>
	<title>Impart | Our Mission</title>
	<meta name="description" content="" />
</svelte:head>


<div class="px-8 lg:px-20 sm:py-40 h-firstPage gap-28 lg:gap-52 flex justify-between items-center">
    <div class="hidden pl-40 lg:block"><BlockoMotioningRight scale={0.65} /></div>
    <div class="pl-8 hidden sm:block lg:hidden"><BlockoMotioningRight scale={0.45} /></div>

    <div class="gap-4 w-full lg:w-1/2 flex flex-col text-center sm:text-left">
        <h1 class="text-6xl text-white font-black">
            Our Mission
        </h1>
        <p class="w-full lg:w-3/4 text-lg text-neutral-300">
            With the rise of the internet, education should
            gotten more accessible. It hasn't. Impart's here
            to provide high quality education to anyone from
            anywhere at anytime.
        </p>
    </div>
</div>