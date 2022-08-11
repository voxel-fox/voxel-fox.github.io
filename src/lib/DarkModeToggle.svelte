<script lang="ts">
  import { theme } from "$lib/themeStore";
  import { systemTheme } from "$lib/useSystemTheme";
  import Icon from "$lib/Icon.svelte";

  let active = false;

  function setActive() {
    active = true;
  }

  function setInactive() {
    active = false;
  }

  $: if ($theme !== "dark" && $theme !== "light") {
    document.documentElement.style.removeProperty("color-scheme");
    delete document.documentElement.dataset.theme;
  }

  $: if ($theme === "dark" || $theme === "light") {
    document.documentElement.style.setProperty("color-scheme", $theme);
    document.documentElement.dataset.theme = $theme;
  }
</script>

{#if $theme === "light" || ($systemTheme === "light" && $theme !== "dark")}
  <button
    class="absolute top-0 left-0 p-4"
    on:click={() => {
      $theme = "dark";
    }}
    on:focus={setActive}
    on:blur={setInactive}
    on:mouseenter={setActive}
    on:mouseleave={setInactive}
    title="Switch to dark mode"
  >
    <Icon name={active ? "sun-set" : "sun"} width="30" height="30" />
  </button>
{:else}
  <button
    class="absolute top-0 left-0 p-4"
    on:click={() => {
      $theme = "light";
    }}
    on:focus={setActive}
    on:blur={setInactive}
    on:mouseenter={setActive}
    on:mouseleave={setInactive}
    title="Switch to light mode"
  >
    <Icon name={active ? "sun-rise" : "moon"} width="30" height="30" />
  </button>
{/if}
