<script>
    import ImpartNameLogo from "$lib/ImpartNameLogo.svelte";
</script>

<svelte:head>
	<title>Impart | Online Asynchronous Higher Education</title>
	<meta name="description" content="Impart is the best way of learning. All your classes are in one place accessible at anytime anywhere." />
</svelte:head>

<header class="pt-8 p-16 flex justify-between items-center">
    <div class="gap-12 flex items-center">
        <ImpartNameLogo scale={0.15} />
        <button class="text-white text-lg">Courses</button>
        <a class="text-white text-lg" href="/mission">Our Mission</a>
    </div>
    <div class="gap-12 flex items-center">
        <a href="/login" class="text-white text-lg">Login</a>
        <div class="text-white text-lg cursor-not-allowed">
            Partner with Us
        </div>
    </div>
</header>