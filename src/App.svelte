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
    console.log(lines);
    items = lines.map((line) => {
      const [name, sellPrice, quantity, buyPrice] = line.split(",");
      return { name, sellPrice, quantity, buyPrice };
    });
  }

  let search = "";

  function addItem(newItem) {
    items = [...items, newItem];
    newItems.push(newItem);
  }

  function dumpItems() {
    const data = newItems
      .map(
        (item) =>
          `${item.name}\t${item.sellPrice}\t${item.quantity}\t${item.buyPrice}`
      )
      .join("\n");
    navigator.clipboard.writeText(data).then(
      () => alert("Data copied to clipboard!"),
      (err) => alert("Failed to copy data!")
    );
  }

  onMount(() => fetchItems());
</script>

<TailwindCss />

<div class="flex flex-col items-center h-full min-h-screen p-8 bg-183e4b">
  <div class="w-full bg-eaeaea p-6 rounded-lg shadow-md">
    <InputFields {addItem} bind:search />
    <button
      on:click={dumpItems}
      class="mb-4 w-full bg-d74a49 text-white p-2 rounded hover:bg-d74a49"
    >
      Dump
    </button>
    <ItemList {items} {search} />
  </div>
</div>
