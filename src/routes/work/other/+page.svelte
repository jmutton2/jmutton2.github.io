<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/projects/imgit">
  <span slot="job_title">{data.tooke.job_title}</span>
  <span slot="job_description">{data.tooke.job_description}</span>
  <span slot="job_timeline">{data.tooke.job_timeline}</span>
  <span slot="job_team_size">{data.tooke.job_team_size}</span>
  <span slot="job_role">{data.tooke.job_role}</span>
  <span slot="next_page">Imgit</span>
</WorkPage>
