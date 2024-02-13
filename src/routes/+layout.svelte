<script>
  import "../app.css";

  import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />
<main class="container mx-auto mt-20 h-full">
  <slot />
</main>
