<script>
    import CourseBanner from '$lib/components/CourseBanner.svelte';

    let courses = [
        {
            id: 1,
            disable: false,
            image: {
                src: "/CalculusCourseLogo.webp",
                alt: "Calculus Course",
            },
            title: "Single Variable Calculus",
            instructor: "Yousif Abdulhussein",
            prerequisites: "Algebra and Trigonometry",
            description: "This course covers differentiation and integration of functions of one variable, and concludes with a brief discussion of infinite series.",
        },
        {
            id: 2,
            disable: true,
            title: "Linear Algebra",
            instructor: "Yousif Abdulhussein",
            prerequisites: "Algebra and Trigonometry",
            description: "This course covers matrix theory and linear algebra, emphasizing topics useful in other disciplines.",
        },
        {
            id: 3,
            disable: true,
            title: "Introduction to Probability",
            instructor: "Yousif Abdulhussein",
            prerequisites: "Single Variable Calculus",
            description: "This course introduces the fundamental concepts of probability theory, including probability spaces, random variables, probability distributions, expectation, and variance."
        },
    ]
</script>

<svelte:head>
	<title>Impart | Courses</title>
	<meta name="description" content="Browse our course library." />
</svelte:head>

<div class="p-10 w-full flex flex-col items-center justify-center">
    <div class="p-14 gap-4 w-full flex flex-col justify-center items-center">
        <h1 class="font-black text-white text-3xl sm:text-5xl">COURSES</h1>
        <p class="text-neutral-400 text-center">Challenging Courses with Projects, Quizzes, and Progress-Tracking</p>
        <div class="h-1 my-8 w-32 rounded-full bg-gradient-to-r from-neutral-700 to-neutral-500"></div>
    </div>
    <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {#each courses as course (course.id)}
            <CourseBanner
                disable={course.disable}
                title={course.title}
                image={course.image}
                instructor={course.instructor}
                prerequisites={course.prerequisites}
                description={course.description}
            />
        {/each}
    </div>    
</div>