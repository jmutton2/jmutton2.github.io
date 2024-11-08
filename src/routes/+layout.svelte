<script lang="ts">
  import '../app.css';
  import Modal from '$lib/components/modal.svelte';
  import AnimatedPreview from '$lib/components/AnimatedPreview.svelte';

  const getFormattedDate = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getFullYear()}-${date.getMonth() + 1}`;
  };

  const getTime = () => {
    date = new Date();
    formattedDate = getFormattedDate(date);
  };

  let ms = 6000;
  let date = new Date();
  let formattedDate = getFormattedDate(date);
  let clear: number;
  let showModal: boolean = false;

  $: {
    clearInterval(clear);
    clear = setInterval(getTime, ms);
  }

  function on_key_down(event) {
    if (event.repeat) return;

    switch (event.key) {
      case '/':
        showModal = true;
        event.preventDefault();
        break;
    }
  }

  function on_key_up(event) {
    switch (event.key) {
      case 'Escape':
        showModal = false;
        event.preventDefault();
        break;
    }
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window on:keydown={on_key_down} on:keyup={on_key_up} />

<div class="app">
  <main class="pt-8">
    <slot></slot>
  </main>
</div>

<Modal bind:showModal>
  <h2 slot="header">somethihg</h2>
</Modal>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    min-height: 100vh;
  }
</style>
