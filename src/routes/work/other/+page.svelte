<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage
  next_page="/projects/lily"
  works={[data.construction, data.superstore, data.dairy_queen]}
>
  <span slot="next_page">Lily</span>
</WorkPage>
