import { pb } from "$lib/pocketbase/pocketbase";
import { getUserState } from "$lib/pocketbase/user.svelte";

const user = getUserState();

export async function login(email: string, password: string) {
    await pb.collection('users').authWithPassword(email, password);
}

export async function signup(username: string, email:string, password: string) {
    try {
        const data = {
            username,
            email,
            password,
            passwordConfirm: password,
        }

        await pb.collection('users').create(data);
        await login(data.email, data.password);
    } catch (err) {
        // handle error
    }
}

export function signOut() {
    pb.authStore.clear();
}