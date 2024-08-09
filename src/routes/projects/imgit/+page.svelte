<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/projects/glov" languages={data.imgit.languages}>
  <span slot="project_title">{data.imgit.project_title}</span>
  <span slot="project_description">{data.imgit.project_description}</span>
  <span slot="project_timeline">{data.imgit.project_timeline}</span>
  <span slot="project_team_size">{data.imgit.project_team_size}</span>
  <span slot="project_role">{data.imgit.project_role}</span>
  <span slot="next_page">Glov</span>
</ProjectPage>
