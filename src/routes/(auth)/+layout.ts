import { getUserState } from '$lib/pocketbase/user.svelte';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async () => {
    const user = await getUserState();

    // If the user exists, redirect to another page (e.g., dashboard)

    if (user.user) {
        throw redirect(302, '/');
    }

    return {};
}) satisfies LayoutLoad;