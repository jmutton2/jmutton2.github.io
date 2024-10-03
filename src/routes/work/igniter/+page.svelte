<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/highmark" works={[data.igniter_tickets]}>
  <span slot="next_page">Highmark Interactive</span>
</WorkPage>
