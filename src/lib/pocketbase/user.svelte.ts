import { pb } from "./pocketbase"

export function getUserState() {
    let user = $state(pb.authStore.model);

    pb.authStore.onChange((auth) => {
        user = pb.authStore.model;
    });

    return {
        get user() { return user },
    };
}
