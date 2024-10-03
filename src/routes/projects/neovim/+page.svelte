<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/" projects={[data.scribe, data.nvim_gol]}>
  <span slot="next_page">Home</span>
</ProjectPage>
