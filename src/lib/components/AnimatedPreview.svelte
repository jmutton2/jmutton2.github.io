<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView: boolean;
  export let classes: string = '';
  export let inner_classes: string = '';

  export let delay_offset: number = 0;
</script>

<div
  class="wrapper {classes}"
  use:inview={{ unobserveOnEnter: true, rootMargin: '10%' }}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    <div
      class={inner_classes}
      in:fly={{ y: -30, duration: 500, delay: 50 * delay_offset }}
    >
      <slot></slot>
    </div>
  {/if}
</div>
