<script>
    import CourseBanner from '$lib/components/CourseBanner.svelte';

    let courses = [
        {
            id: 1,
            disable: true,
            title: "None",
            instructor: "Teacher",
            prerequisites: "PreReqs",
            description: "description",
        }
    ]
</script>

<div class="p-8 w-full flex flex-col items-center justify-center">
    <div class="p-14 gap-4 w-full flex flex-col justify-center items-center">
        <h1 class="font-black text-3xl sm:text-5xl">COURSES</h1>
        <p class="text-neutral-400 text-center">Challenging Courses with Projects, Quizzes, and Progress-Tracking</p>
        <div class="h-1 my-8 w-32 rounded-full bg-gradient-to-r from-neutral-700 to-neutral-500"></div>
    </div>
    <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {#each courses as course (course.id)}
            <CourseBanner
                disable={course.disable}
                title={course.title}
                instructor={course.instructor}
                prerequisites={course.prerequisites}
                description={course.description}
            />
        {/each}
    </div>    
</div>