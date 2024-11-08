<script>
  import temp from '$lib/images/temp.png';

  import AnimatedPreview from '$lib/components/AnimatedPreview.svelte';

  import Ticket from '$lib/images/ticket.svg.svelte';
</script>

<div class="content">
  <section class="pb-20 px-5">
    <AnimatedPreview delay_offset={0}>
      <h1 class="font-extrabold text-7xl leading-[4.5rem]">
        Hi, I'm Jacob,
        <br />
        A Software Engineer
      </h1>
    </AnimatedPreview>
  </section>

  <section class="w-1/2 mx-auto pb-28 px-5">
    <AnimatedPreview delay_offset={9}>
      <p class="mt-4 text-black-200 mx-auto">
        I am a Software Engineer who graduated in 2023, and am now working full
        time in my field. I take pride in my work and strive to become a well
        rounded and competent engineer.
      </p>
    </AnimatedPreview>
  </section>

  <AnimatedPreview delay_offset={10}>
    <section class="py-14 px-5">
      <h2 class="font-extrabold text-5xl leading-[4.5rem]">Work</h2>
    </section>
  </AnimatedPreview>

  <section class="pb-28 px-5">
    <AnimatedPreview delay_offset={11}>
      <div class="grid expanding-grid-right grid-rows-[1fr] gap-x-[50px] mb-16">
        <a class="left tile" href="/work/igniter">
          <div class="text-right flex flex-col">
            <span>Igniter Tickets</span>
            <span class="text-xl">Software Engineer</span>
          </div>
          <div class="mt-11">
            {#await import(`$lib/images/igniter/demo.png`) then { default: src }}
              <img class="max-w-5xl" {src} alt="Igniter Tickets" />
            {/await}
          </div>
        </a>
        <a class="right tile" href="/work/highmark">
          <div class="text-right flex flex-col">
            <span>Highmark Interactive</span>
            <span class="text-xl">DevOps Specialist</span>
          </div>
          <div class="mt-11">
            {#await import(`$lib/images/highmark/demo.png`) then { default: src }}
              <img class="max-w-5xl" {src} alt="Igniter Tickets" />
            {/await}
          </div>
        </a>
      </div>

      <div class="grid expanding-grid-left grid-rows-[1fr] gap-x-[50px] mb-16">
        <a class="left tile" href="/work/nca">
          <div class="text-right flex flex-col">
            <span>National Center for Audiology</span>
            <span class="text-xl">Junior Software Engineer</span>
          </div>
          <div class="mt-11">
            {#await import(`$lib/images/nca/demo.png`) then { default: src }}
              <img class="max-w-5xl" {src} alt="Igniter Tickets" />
            {/await}
          </div>
        </a>
        <a class="right tile" href="/work/other">
          <div class="text-right flex flex-col">
            <span>Other</span>
            <span class="text-xl"
              >Various work in construction, retail, and food service.</span
            >
          </div>
          <div class="mt-11">
            {#await import(`$lib/images/construction/demo.png`) then { default: src }}
              <img class="max-w-5xl" {src} alt="Igniter Tickets" />
            {/await}
          </div>
        </a>
      </div>
    </AnimatedPreview>

    <AnimatedPreview delay_offset={12}>
      <section class="py-14 px-5">
        <h2 class="font-extrabold text-5xl leading-[4.5rem]">Projects</h2>
      </section>
    </AnimatedPreview>

    <AnimatedPreview delay_offset={13}>
      <div class="grid grid-cols-[1fr_2fr] grid-rows-[1fr] gap-x-[50px] mb-16">
        <a class="tile" href="/projects/anidex">
          <div class="text-right flex flex-col">
            <span class="text-xl">Anidex</span>
            <span>I love pokemon, and I wanted the pokedex in real life...</span
            >
          </div>
          <div class="mt-11">
            <img src={temp} alt="temp" />
          </div>
        </a>
        <a class="tile" href="/projects/pi-sec">
          <div class="text-right flex flex-col">
            <span class="text-xl">Pi-Sec</span>
            <span>A modular home security system.</span>
          </div>
          <div class="mt-11">
            <img src={temp} alt="temp" />
          </div>
        </a>
      </div>

      <a class="tile" href="/projects/neovim">
        <div class="text-right flex flex-col">
          <span class="text-xl">Neovim</span>
          <span
            >A collection of plugins and small programs with a focus on Neovim.</span
          >
        </div>
        <div class="mt-11">
          <img src={temp} alt="temp" />
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

  .tile:hover {
    filter: saturate(1.2);
    transform: translate3d(0, -3px, 0);
  }

  span,
  div,
  p {
    font-family: 'Source Code Pro', monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .expanding-grid-left {
    grid-template-columns: var(--left, 1fr) var(--right, 2fr);
    transition: ease 400ms;
  }

  .expanding-grid-left:has(.left:hover) {
    --left: 2fr;
    --right: 1fr;
  }

  .expanding-grid-right {
    grid-template-columns: var(--left, 2fr) var(--right, 1fr);
    transition: ease 400ms;
  }

  .expanding-grid-right:has(.right:hover) {
    --left: 1fr;
    --right: 2fr;
  }
</style>
