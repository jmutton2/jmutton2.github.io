<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/nca" works={[data.highmark]}>
  <span slot="next_page">National Center for Audiology</span>
</WorkPage>
