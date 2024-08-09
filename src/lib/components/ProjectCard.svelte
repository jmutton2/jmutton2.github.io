<script lang="ts">
  export let link: string = '#';
</script>

<a
  href={link}
  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:no-underline hover:bg-gray-100 h-28"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-0">
    <slot name="project_title"></slot>
  </h5>
  <p class="font-normal text-gray-700 mb-0">
    <slot name="project_body"></slot>
  </p>
  <slot></slot>
</a>
