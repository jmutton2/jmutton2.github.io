<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/other" works={[data.nca]}>
  <span slot="next_page">Other</span>
</WorkPage>
