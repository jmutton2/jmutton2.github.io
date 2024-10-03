<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/projects/pi-sec" projects={[data.glov]}>
  <span slot="next_page">Pi-Sec</span>
</ProjectPage>
