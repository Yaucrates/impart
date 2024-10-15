import { pb } from "./pocketbase"

export function getUser() {
    let user = $state(pb.authStore.model);

    pb.authStore.onChange((auth) => {
        user = pb.authStore.model;
    });

    return {
        get user() { return user },
    };
}
