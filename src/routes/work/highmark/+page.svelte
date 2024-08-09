<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/nca" languages={data.highmark.languages}>
  <span slot="job_title">{data.highmark.job_title}</span>
  <span slot="job_description">{data.highmark.job_description}</span>
  <span slot="job_timeline">{data.highmark.job_timeline}</span>
  <span slot="job_team_size">{data.highmark.job_team_size}</span>
  <span slot="job_role">{data.highmark.job_role}</span>
  <span slot="next_page">National Center for Audiology</span>
</WorkPage>
