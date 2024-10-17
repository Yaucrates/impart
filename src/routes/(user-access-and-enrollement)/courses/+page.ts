import { pb } from "$lib/pocketbase/pocketbase";
import type { PageLoad } from "./$types";

export const load = (async () => {
    const courses = await pb
        .collection("courses")
        .getFullList({
            sort: "disable",
        })
        .catch(() => {
            return [];
        });

    return {
        courses,
    };
}) satisfies PageLoad;
