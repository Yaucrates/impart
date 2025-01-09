<script>
    import BlockoWaving from "$lib/components/blocko/BlockoWaving.svelte";
</script>
<svelte:head>
	<title>Impart | Online Asynchronous Higher Education</title>
	<meta name="description" content="Impart is the best way of learning. All your classes are in one place accessible at anytime anywhere." />
</svelte:head>

<div class="px-8 sm:px-20 md:py-40 h-firstPage flex justify-around items-center">
    <div class="gap-8 w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 class="w-full md:w-4/5 lg:w-full text-5xl lg:text-6xl text-white font-black">
            Meet the Ultimate Virtual School
        </h1>
        <p class="md:w-3/4 text-center md:text-left text-lg text-neutral-300">
            Impart is the best way to learn online.
            All of your courses and their learning
            material in one place accessible to
            anyone from anywhere at anytime.
        </p>
        <a href="/courses" class="px-6 py-2 w-fit font-medium text-xl rounded-full text-white bg-blue-600 hover:bg-blue-700">Continue</a>
    </div>
    <div class="hidden lg:block"><BlockoWaving scale={0.65} /></div>
    <div class="hidden md:block lg:hidden"><BlockoWaving scale={0.55} /></div>
</div>