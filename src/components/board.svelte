<script lang="ts">
  import Button from "./button.svelte";
  import type { buttonData } from "../helpers/calculator";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let layout: buttonData[][];
</script>

<div class="container">
  {#each layout as row}
    {#each row as col}
      {#if col.char !== ""}
        <Button
          width={col.width}
          height={col.height}
          on:click={() => dispatch("keyDown", col.char)}
          char={col.char}
        />
      {:else}
        <div />
      {/if}
    {/each}
  {/each}
</div>

<style lang="scss">
  @import "./_variables";
  .container {
    display: grid;
    grid-template-columns: repeat(4, 40px);
    grid-template-rows: repeat(5, 40px);
    gap: 5px;
    padding: 10px;
    /* box-shadow: 0 5px 15px -5px #0004; */
    border-radius: 5px;
  }
</style>
