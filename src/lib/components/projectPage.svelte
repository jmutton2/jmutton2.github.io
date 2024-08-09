<script lang="ts">
  import temp from '$lib/images/temp.png';

  import AnimatedPreview from '$lib/components/AnimatedPreview.svelte';
  export let next_page: string = '';
</script>

<div class="content">
  <section class="py-28 px-5">
    <AnimatedPreview delay_offset={0}>
      <h1 class="font-extrabold text-7xl leading-[4.5rem]">
        <slot name="project_title"></slot>
      </h1>
    </AnimatedPreview>
  </section>

  <section class="py-28 px-5 w-4/5 mx-auto">
    <AnimatedPreview
      delay_offset={9}
      classes="justify-around w-full"
      inner_classes="flex justify-between"
    >
      <div>
        <p class="mt-4 text-black-200 mx-auto">Timeline</p>
        <p class="mt-4 text-black-200 mx-auto">
          <slot name="project_timeline"></slot>
        </p>
      </div>
      <div>
        <p class="mt-4 text-black-200 mx-auto">Team Size</p>
        <p class="mt-4 text-black-200 mx-auto">
          <slot name="project_team_size"></slot>
        </p>
        <p></p>
      </div>
      <div>
        <p class="mt-4 text-black-200 mx-auto">Role</p>
        <p class="mt-4 text-black-200 mx-auto">
          <slot name="project_role"></slot>
        </p>
      </div>
    </AnimatedPreview>
  </section>

  <section class="py-14 px-5">
    <AnimatedPreview delay_offset={10}>
      <h2 class="font-extrabold text-5xl leading-[4.5rem]">Work</h2>
    </AnimatedPreview>
  </section>

  <section class="py-28 px-5">
    <AnimatedPreview delay_offset={11}>
      <a class="tile" href="/work/igniter">
        <div class="text-right flex flex-col">
          <span>Igniter Tickets</span>
          <span>Software Engineer</span>
        </div>
        <div class="mt-11">
          <img src={temp} alt="temp" />
        </div>
      </a>
    </AnimatedPreview>
  </section>

  <section class="py-28 px-5">
    <AnimatedPreview delay_offset={9}>
      <h1 class="font-extrabold text-kxl leading-[4.5rem]">Overview</h1>
      <p class="mt-4 text-black-200 mx-auto">
        <slot name="project_description"></slot>
      </p>
    </AnimatedPreview>
  </section>

  <section class="py-14 px-5">
    <AnimatedPreview delay_offset={13}>
      <a class="big-tile" href={next_page}>
        <div class="text-center">
          <h2 class="text-4xl">
            <slot name="next_page"></slot><span class="cursor"></span>
          </h2>
        </div>
      </a>
    </AnimatedPreview>
  </section>
</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  .tile {
    background: #242424;
    height: 20rem;
    border-radius: 64px;
    padding: 42px 64px 0;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    height: 100%;
    overflow: hidden;
    filter: saturate(0);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }

  .big-tile {
    width: 100%;
    height: 20rem;
    border-radius: 64px;
    padding: 84px 128px;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    height: 100%;
    overflow: hidden;
    filter: saturate(0);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }

  .tile:hover {
    filter: saturate(1.2);
    transform: translate3d(0, -3px, 0);
  }

  .big-tile:hover {
    box-shadow: 0 0 0 3px #242424;
    filter: saturate(1.2);
    transform: translate3d(0, -3px, 0);
  }

  img {
    max-width: initial;
  }

  span,
  div,
  p {
    font-family: 'Source Code Pro', monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
</style>
