import { getUser } from "$lib/pocketbase/user.svelte";
import { pb } from "$lib/pocketbase/pocketbase";

const user = getUser();

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
            name: "Mustafa Abdulhussein"
        }

        await pb.collection('users').create(data);
        await login(data.username, data.password);
    } catch (err) {
        // handle error
    }
}

export function signOut() {
    pb.authStore.clear();
}