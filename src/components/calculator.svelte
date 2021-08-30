<script lang="ts">
  import { getLayoutFromArray, boardKeyDownHandler } from "../helpers/calculator";
  import { globalKeyDown } from '../helpers/stores';
  import type { buttonData } from "../helpers/calculator";
  import Board from "./board.svelte";
  import Windows from './windows.svelte';

  let text = ""

  // board layout
  const rawLayout = [
    ["←", "←", "C", "+"],
    ["1", "2", "3", "-"],
    ["4", "5", "6", "×"],
    ["7", "8", "9", "÷"],
    [".", "0", "=", "="],
  ];
  const layout: buttonData[][] = getLayoutFromArray(rawLayout);

</script>
<svelte:window on:keydown="{(e) => globalKeyDown.set(e)}" />
<div class="calculator">
  <Windows bind:text={text}/>
  <Board layout={layout} on:keyDown={(e) => text = boardKeyDownHandler(e, text)}/>
</div>
<style>
</style>

