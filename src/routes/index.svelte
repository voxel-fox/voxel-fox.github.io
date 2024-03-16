<script lang="ts">
  import Avatar from "$lib/Avatar.svelte";
  import CornerMark from "$lib/CornerMark.svelte";
  import DarkModeToggle from "$lib/DarkModeToggle.svelte";
  import GitHubLink from "$lib/GitHubLink.svelte";
  import VoxelFoxLogo from "$lib/VoxelFoxLogo.svelte";
  import VoxelFoxMark from "$lib/VoxelFoxMark.svelte";
</script>

<CornerMark
  class="absolute top-0 right-0 w-[20vw]"
  role="presentation"
  aria-hidden="true"
/>
<DarkModeToggle />

<main class="flex flex-col justify-center items-center gap-12 pt-[5vh] min-h-screen">
  <h1 class="flex flex-col justify-center items-center">
    <VoxelFoxMark class="w-[15vw] mb-10" aria-hidden="true" />
    <VoxelFoxLogo class="w-[30vw]" />
  </h1>
  <p class="text-2xl text-center">Making things on the internet.</p>

  <p class="flex flex-wrap gap-8 items-center justify-center">
    <GitHubLink href="https://github.com/voxel-fox" title="GitHub: Voxel Fox">
      <VoxelFoxMark
        class="relative z-2"
        width="90"
        height="90"
        outline="var(--foreground-color)"
        bg="transparent"
        color="transparent"
      />
    </GitHubLink>
    <GitHubLink href="https://github.com/kara-todd" title="GitHub: Kara Todd">
      <Avatar class="relative z-2 translate-x-1" width="80" height="80" />
    </GitHubLink>
  </p>

  <p class="text-base text-center mt-auto">Get in touch! <a class="inline-block py-1 border-b border-[#E46B2A] font-bold text-[#E46B2A] hover:border-transparent" href="mailto:hello@voxel-fox.com">hello@voxel-fox.com</a></p>
</main>
