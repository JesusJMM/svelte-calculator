<script lang="ts">
export let text = "";
export let error = "";

</script>
<div class="windows-container">
  <div class="windows">
    <span>
      {text}
    </span>
  </div>
  <div class="errors">
    {error}
  </div>
</div>
<style lang="scss">
  @import "./_variables";
  .windows{
    width: 100%;
    min-height: 44px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 10px;
    font-size: 25px;
    font-family: 'JetBrains Mono', monospace;
    color: $primary-color-dark;
    border-radius: 5px;
    &:focus{
      border: 1px solid $primary-color;
    }
  }

</style>

