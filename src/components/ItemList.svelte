<script lang="ts">
    export let items;
    export let search = "";

    let filteredItems = [];

    $: filteredItems = items.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {#each filteredItems as filteredItem}
        <div class="bg-[#183e4b] p-4 text-center rounded-md transform transition-transform hover:scale-105">
            <div class="text-[#eaeaea] text-lg h-12 flex items-center justify-center overflow-hidden mb-3">
                {filteredItem.name}
            </div>
            <img
                src="https://placehold.co/160x160"
                alt={filteredItem.name}
                class="w-full h-auto max-w-[160px] mx-auto"
            />
            <div>
                <span class="text-[#8ba0a4] text-sm mr-2">Buy: {filteredItem.buyPrice}</span>
                <span class="text-[#8ba0a4] text-sm">Sell: {filteredItem.sellPrice}</span>
            </div>
        </div>
    {/each}
</div>
