<script lang="ts">
    import { goto } from "$app/navigation";
    import { getUser } from "$lib/pocketbase/user.svelte";
    import { signup } from "./auth";

    let username = $state("");
    let email = $state("");
    let password = $state("");
    let error = $state(false);

    const handleClick = async () => {
        await signup(username, email, password).then(() => {
            const user = getUser();

            if (user.user) {
                goto("/");
            }
        }).catch(() => {
            error = true;
        });
    }
</script>

<div
	class="mx-auto w-full max-w-md rounded-2xl border p-8 shadow border-gray-800 bg-magnificent-700"
>
	<h2 class="text-xl font-bold text-neutral-200">Welcome to Impart</h2>
	<p class="mt-2 max-w-sm text-sm text-neutral-300">
		Sign up here to get access to all our courses.
	</p>
    {#if error}
        <p class="mt-2 text-sm text-red-300">Oops, something wen't wrong with signing up. Check your information!</p>
    {/if}

	<form class="gap-4 flex flex-col my-8">
        <div class="flex w-full flex-col space-y-2">
            <label for="username" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">Username</label>
            <input
                id="username"
                placeholder="johndoe"
                type="username"
                autocomplete="username"
                class="duration-400 flex h-10 w-full rounded-md border-none bg-magnificent-600 px-3 py-2 text-sm text-white shadow-input  transition file:border-0 
                       file:bg-transparent file:text-sm file:font-medium placeholder-text-neutral-600
                       focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600 disabled:cursor-not-allowed
                       disabled:opacity-50 group-hover/input:shadow-none shadow-[0px_0px_1px_1px_var(--neutral-700)]"
                bind:value={username}
            />
        </div>
        <div class="flex w-full flex-col space-y-2">
            <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">Email</label>
            <input
                id="email"
                placeholder="johndoe@gmail.com"
                type="email"
                autocomplete="email"
                class="duration-400 flex h-10 w-full rounded-md border-none bg-magnificent-600 px-3 py-2 text-sm text-white shadow-input  transition file:border-0 
                       file:bg-transparent file:text-sm file:font-medium placeholder-text-neutral-600
                       focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600 disabled:cursor-not-allowed
                       disabled:opacity-50 group-hover/input:shadow-none shadow-[0px_0px_1px_1px_var(--neutral-700)]"
                bind:value={email}
            />
        </div>
        <div class="flex w-full flex-col space-y-2">
            <label for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">Password</label>
            <input
                id="password"
                placeholder="••••••••"
                type="password"
                autocomplete="new-password"
                class="duration-400 flex h-10 w-full rounded-md border-none bg-magnificent-600 px-3 py-2 text-sm text-white shadow-input  transition file:border-0 
                       file:bg-transparent file:text-sm file:font-medium placeholder-text-neutral-600
                       focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600 disabled:cursor-not-allowed
                       disabled:opacity-50 group-hover/input:shadow-none shadow-[0px_0px_1px_1px_var(--neutral-700)]"
                bind:value={password}
            />
        </div>
		<button
			class="h-10 w-full rounded-md font-medium text-white bg-blurple-900 hover:bg-blurple-950 transition-all duration-300"
			type="submit"
            onclick={handleClick}
		>
			Sign up &rarr;
		</button>
        <div class="w-full flex justify-center">
            <p class="text-neutral-200 font-medium">Already have an account? <a href="/login" class="text-blue-500">Login</a></p>
        </div>
	</form>
</div>