<script lang="ts">
    export let addItem;
    export let search: string;

    let item = "";
    let sellPrice: number | null = null;
    let buyPrice: number | null = null;
    let quantity = "1";

    // Updating the search variable whenever 'item' changes
    $: search = item;

    function submit() {
        addItem({ name: item, sellPrice, quantity, buyPrice });
        item = "";
        sellPrice = null;
        buyPrice = null;
    }
</script>

<div class="flex flex-col mb-4 space-y-4">
    <input
        type="text"
        placeholder="Item"
        bind:value={item}
        class="p-2 border rounded border-8ba0a4"
    />
    <input
        type="number"
        placeholder="Sell Price"
        bind:value={sellPrice}
        class="p-2 border rounded border-8ba0a4"
    />
    <input
        type="number"
        placeholder="Buy Price"
        bind:value={buyPrice}
        class="p-2 border rounded border-8ba0a4"
    />
    <select bind:value={quantity} class="p-2 border rounded border-8ba0a4">
        <option value="1">1</option>
        <option value="10">10</option>
    </select>
    <button
        on:click={submit}
        class="bg-1b4552 text-white p-2 rounded hover:bg-183e4b"
    >
        Add Item
    </button>
</div>
