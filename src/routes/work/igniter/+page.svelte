<script lang="ts">
  import data from '$lib/data/data.json';
  import WorkPage from '$lib/components/workPage.svelte';
</script>

<WorkPage next_page="/work/highmark" languages={data.igniter_tickets.languages}>
  <span slot="job_title">{data.igniter_tickets.job_title}</span>
  <span slot="job_description">{data.igniter_tickets.job_description}</span>
  <span slot="job_timeline">{data.igniter_tickets.job_timeline}</span>
  <span slot="job_team_size">{data.igniter_tickets.job_team_size}</span>
  <span slot="job_role">{data.igniter_tickets.job_role}</span>
  <span slot="next_page">Highmark Interactive</span>
</WorkPage>
