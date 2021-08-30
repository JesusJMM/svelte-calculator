<script lang="ts">
  import { windowFocus } from "../helpers/stores";
  export let text = "";
  export let error = "";
</script>

<div class="windows-container">
  <input
    on:blur={() => windowFocus.set(false)}
    on:focus={() => windowFocus.set(true)}
    bind:value={text}
    class="windows"
  />
  <div class="errors">
    {error}
  </div>
</div>

<style lang="scss">
  @import "./_variables";
  .windows {
    width: 100%;
    min-height: 44px;
    text-align: right;
    background-color: white;
    padding: 5px 10px;
    font-size: 25px;
    font-family: "JetBrains Mono", monospace;
    color: $primary-color-dark;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    transition: 0.3s ease;
    &:focus {
      border: 1px solid $primary-color;
      outline: none;
    }
  }
</style>
