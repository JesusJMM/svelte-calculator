<script lang="ts">
import { specialCharactersTable } from '../helpers/calculator'
export let width = 1
export let height = 1
export let char = "";

let button: HTMLElement
function onKeyDown(e: KeyboardEvent){
  let key = e.key
  /* console.log(key) */
  if (specialCharactersTable[key] !== undefined){
    key = specialCharactersTable[key]
  }
  if(key === char){
    button.focus()
    button.click()
  }
}
</script>
<svelte:window on:keydown={onKeyDown}/>
<button style="{`
    grid-column-end: span ${width};
    grid-row-end: span ${height};
  `}" 
  on:click|preventDefault
  bind:this={button}
  >
  {char}
  <slot></slot>
</button>
<style lang="scss">
  @import './_variables';
  button{
    width: 100%;
    height: 100%;
    color: $primary-color;
    border: none;
    /* border: 1px solid $primary-color; */
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 24px;
    user-select: none;
    background-color: white;
    transition: .05s ease background-color, .1s ease-in color;
    &:hover, &:focus{
      color: $primary-color-dark;
    }
    &:focus{
      border: 1px solid $primary-color;
    }
    &:active{
      background-color: $primary-color-light;
    }
  }
</style>
