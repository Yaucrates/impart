<script lang="ts">
    let { title, description }: { title: string, description?: string } = $props();
</script>

<div class="w-[312px] h-96 row-span-1 overflow-hidden flex flex-col justify-between rounded-xl bg-[#252930] shadow-input transition duration-200">
	<div class="bg-[#1d1e23] h-1/2 flex items-center justify-center">
        No Image Currently
    </div>
	<div class="p-5 h-1/2 transition duration-200 flex flex-col gap-3">
		<div class="text-lg uppercase font-bold text-neutral-600 dark:text-neutral-200">
			{title}
		</div>
		<div class="text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{description ?? "This is a planned course for the future"}
		</div>
	</div>
</div>