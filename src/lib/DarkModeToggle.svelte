<script lang="ts">
  import { browser } from "$app/env";
  import { theme } from "$lib/themeStore";
  import Icon from "$lib/Icon.svelte";

  let title: string;
  let icon: string;
  let activeIcon: string;
  let active = false;
  let handleClick: () => void;

  const systemTheme =
    browser && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  function setActive() {
    active = true;
  }

  function setInactive() {
    active = false;
  }

  function lightMode() {
    title = "Switch to dark mode";
    icon = "sun";
    activeIcon = "sun-set";
    handleClick = () => {
      $theme = "dark";
    };
  }

  function darkMode() {
    title = "Switch to light mode";
    icon = "moon";
    activeIcon = "sun-rise";
    handleClick = () => {
      $theme = "light";
    };
  }

  $: if (browser && $theme !== "system") {
    document.documentElement.style.setProperty("color-scheme", $theme);
    document.documentElement.dataset.theme = $theme;
    if ($theme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  }

  $: if (browser && systemTheme) {
    if (systemTheme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  }
</script>

<button
  class="absolute top-0 left-0 p-4 hidden dark:block"
  on:click={handleClick}
  on:focus={setActive}
  on:blur={setInactive}
  on:mouseenter={setActive}
  on:mouseleave={setInactive}
  {title}
>
  <Icon name={active ? activeIcon : icon} width="30" height="30" />
</button>
