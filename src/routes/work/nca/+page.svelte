<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/other" languages={data.nca.languages}>
  <span slot="job_title">{data.nca.job_title}</span>
  <span slot="job_description">{data.nca.job_description}</span>
  <span slot="job_timeline">{data.nca.job_timeline}</span>
  <span slot="job_team_size">{data.nca.job_team_size}</span>
  <span slot="job_role">{data.nca.job_role}</span>
  <span slot="next_page">Other</span>
</WorkPage>
