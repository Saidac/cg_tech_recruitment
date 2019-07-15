<template>
  <div class="container bg-gray-900">
    <div>
      <h1 class="title text-white">
        cg_tech_recruitment
      </h1>
      <h2 class="subtitle text-white">
        CG Tech Recruitment
      </h2>
    </div>
  </div>
</template>

<script>
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0;
  min-width:100vw;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  @apply text-6xl;
}

.subtitle {
}

.links {
}
</style>
