<script>
  import CardSection from "$lib/components/cardSection.svelte";
  import DescriptionSection from "$lib/components/descriptionSection.svelte";
  import HeroMain from "$lib/components/heroMain.svelte";
  export let data;

</script>

<HeroMain />
<CardSection />
<DescriptionSection />

---------------

<ul>
  {#each data.users as user}
    <li>{user.first_name}</li>
  {/each}
</ul>