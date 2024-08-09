<script lang="ts">
  import '../app.css';

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

  $: {
    clearInterval(clear);
    clear = setInterval(getTime, ms);
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

<div class="app">
  <main class="pt-8">
    <slot></slot>
  </main>

  <footer>
    <p>[0] 0:portfolio*</p>
    <p>Contact</p>
    <p>"Jacob" {formattedDate}</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    min-height: 100vh;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background: #90a959;
    padding: 1px 5px;
  }

  footer a {
    font-weight: bold;
  }
</style>
