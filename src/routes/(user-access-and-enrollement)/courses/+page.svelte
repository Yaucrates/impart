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
        <CourseBanner disable title="Single Variable Calculus" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Linear Algebra" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Introduction to Probability" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Multivariable Calculus" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Differential Equations" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Abstract Algebra" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Real Analysis" instructor="Yousif Abdulhussein"/>
        <CourseBanner disable title="Complex Analysis" instructor="Yousif Abdulhussein"/>
    </div>
</div>