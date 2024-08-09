<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/projects/pi-sec" languages={data.glov.languages}>
  <span slot="project_title">{data.pisec.project_title}</span>
  <span slot="project_description">{data.pisec.project_description}</span>
  <span slot="project_timeline">{data.pisec.project_timeline}</span>
  <span slot="project_team_size">{data.pisec.project_team_size}</span>
  <span slot="project_role">{data.pisec.project_role}</span>
  <span slot="next_page">Pi-Sec</span>
</ProjectPage>
