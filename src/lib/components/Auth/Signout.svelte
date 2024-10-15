<script>
    import { pb } from "$lib/pocketbase/pocketbase";

    function signOut() {
        pb.authStore.clear();
    }
</script>

<button onclick={signOut} class="">Sign Out</button>