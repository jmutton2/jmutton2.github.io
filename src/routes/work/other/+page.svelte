<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/projects/imgit" works={[data.tooke]}>
  <span slot="next_page">Imgit</span>
</WorkPage>
