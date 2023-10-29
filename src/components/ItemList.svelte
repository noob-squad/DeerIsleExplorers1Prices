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
            <li class="p-4 bg-8ba0a4 rounded">
                <span class="font-semibold text-183e4b">{filteredItem.name}</span>
                -
                <span class="text-eaeaea">{filteredItem.price}</span> -
                <span class="text-1b4552">{filteredItem.quantity}</span>
            </li>
        {/each}
    </ul>
</div>
