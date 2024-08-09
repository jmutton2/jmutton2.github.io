<script lang="ts">
  import data from '$lib/data/data.json';
  import ProjectPage from '$lib/components/projectPage.svelte';
</script>

<ProjectPage next_page="/" languages={data.nvim_gol.languages}>
  <span slot="project_title">{data.neovim_gol.project_title}</span>
  <span slot="project_description">{data.neovim_gol.project_description}</span>
  <span slot="project_timeline">{data.neovim_gol.project_timeline}</span>
  <span slot="project_team_size">{data.neovim_gol.project_team_size}</span>
  <span slot="project_role">{data.neovim_gol.project_role}</span>
  <span slot="next_page">Neovim</span>
</ProjectPage>
