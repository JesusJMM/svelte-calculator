<script lang="ts">
  export let text = "";
  export let error = "";
  function logCursorPos(e){
    console.log(e.target.selectionStart, e.target.selectionEnd)
  }
</script>

<div class="windows-container">
  <input
    bind:value={text}
    on:keydown={logCursorPos}
    on:click={logCursorPos}
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
    &:focus {
      border: 1px solid $primary-color;
      outline: none;
    }
  }
</style>
