<script lang="ts">
    export let items;
    export let search = "";

    let filteredItems = [];

    $: filteredItems = items.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );
</script>

<div class="relative">
    <ul class="space-y-2">
        {#each filteredItems as filteredItem}
            <li class="p-4 bg-gray-200 rounded">
                <span class="font-semibold">{filteredItem.name}</span> -
                <span class="text-gray-600">{filteredItem.price}</span> -
                <span class="text-gray-400">{filteredItem.quantity}</span>
            </li>
        {/each}
    </ul>
</div>
