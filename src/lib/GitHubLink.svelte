<script lang="ts">
  export let href: string;
  export let title: string;

  import Icon from "$lib/Icon.svelte";
</script>

<a
  class="relative flex flex-col justify-center items-center w-24 h-24"
  {href}
  {title}
>
  <div
    class="flex justify-center items-center rounded-full border-2 border-foreground p-2 absolute top-full left-1/2 -translate-x-1/2"
  >
    <Icon width="20" height="20" name={"github"} />
  </div>
  <slot />
</a>
