<script lang="ts">
  export let name: string;
  const props = $$props;
</script>

<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  viewBox="0 0 24 24"
  role="img"
>
  {#if name == "moon"}
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  {:else if name === "sun"}
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  {:else if name === "sun-rise"}
    <path
      d="M17 18a5 5 0 00-10 0M12 2v7M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4"
    />
  {:else if name === "sun-set"}
    <path
      d="M17 18a5 5 0 00-10 0M12 9V2M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M16 5l-4 4-4-4"
    />
  {:else if name === "github"}
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
    />
  {/if}
</svg>
