<script lang="ts">
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import ItemList from "./components/ItemList.svelte";
  import InputFields from "./components/InputFields.svelte";
  import { onMount } from "svelte";

  let items = [];
  const newItems = [];

  async function fetchItems() {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQ7tQz6gqyRWbc15gzLKZyFjVyNAkmmlLE4mGzlpyK6SY1piANAci7CaVcYlxmse8hcMzHo1W6QUDi/pub?output=csv"
    );
    const text = await response.text();
    const lines = text.split("\n").slice(1);
    items = lines.map((line) => {
      const [name, price, quantity] = line.split(",");
      return { name, price, quantity };
    });
  }

  let search = "";

  function addItem(newItem) {
    items = [...items, newItem];
    newItems.push(newItem);
  }

  function dumpItems() {
    const data = newItems
      .map((item) => `${item.name}\t${item.price}\t${item.quantity}`)
      .join("\n");
    navigator.clipboard.writeText(data).then(
      () => alert("Data copied to clipboard!"),
      (err) => alert("Failed to copy data!")
    );
  }

  onMount(() => fetchItems());
</script>

<TailwindCss />

<div class="flex flex-col items-center h-full w-full p-8 bg-gray-100">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <InputFields {addItem} bind:search />
    <ItemList {items} {search} />
    <button
      on:click={dumpItems}
      class="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
    >
      Dump
    </button>
  </div>
</div>
