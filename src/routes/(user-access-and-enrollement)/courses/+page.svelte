<script>
    import CourseBanner from "$lib/components/CourseBanner.svelte";
</script>

<div class="p-8 w-full flex flex-col items-center justify-center">
    <div class="p-14 gap-4 w-full flex flex-col justify-center items-center">
        <h1 class="font-black text-5xl">COURSES</h1>
        <p class="text-neutral-400">Challenging Courses with Projects, Quizzes, and Progress-Tracking</p>
        <div class="h-1 my-8 w-32 rounded-full bg-gradient-to-r from-neutral-700 to-neutral-500"></div>
    </div>
    <div class="w-fit gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CourseBanner title="Single Variable Calculus"/>
        <CourseBanner title="Linear Algebra"/>
        <CourseBanner title="Introduction to Probability"/>
        <CourseBanner title="Multivariable Calculus"/>
        <CourseBanner title="Differential Equations"/>
        <CourseBanner title="Abstract Algebra"/>
        <CourseBanner title="Real Analysis"/>
        <CourseBanner title="Complex Analysis"/>
    </div>
</div>