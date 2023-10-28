<script lang="ts">
    export let addItem;
    export let search: string;

    let item = "";
    let price: number | null = null;
    let quantity = "1";

    // Updating the search variable whenever 'item' changes
    $: search = item;

    function submit() {
        addItem({ name: item, price, quantity });
        item = "";
        price = null;
    }
</script>

<div class="flex flex-col mb-4 space-y-4">
    <input
        type="text"
        placeholder="Item"
        bind:value={item}
        class="p-2 border rounded"
    />
    <input
        type="number"
        placeholder="Price"
        bind:value={price}
        class="p-2 border rounded"
    />
    <select bind:value={quantity} class="p-2 border rounded">
        <option value="1">1</option>
        <option value="10">10</option>
    </select>
    <button
        on:click={submit}
        class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
        +
    </button>
</div>
