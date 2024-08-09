<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/projects/anidex" languages={data.pisec.languages}>
  <span slot="project_title">{data.anidex.project_title}</span>
  <span slot="project_description">{data.anidex.project_description}</span>
  <span slot="project_timeline">{data.anidex.project_timeline}</span>
  <span slot="project_team_size">{data.anidex.project_team_size}</span>
  <span slot="project_role">{data.anidex.project_role}</span>
  <span slot="next_page">Anidex</span>
</ProjectPage>
