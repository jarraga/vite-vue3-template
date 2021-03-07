<template>
  <div
    class="bg-white p-12 rounded-lg shadow-lg flex flex-col justify-center items-center select-none"
  >
    <div class="text-lg text-center">
      vite.js + vue3 + vuex + router + tailwind.css
    </div>
    <Butt @click="go" color="indigo" class="mt-12">global component</Butt>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      window.open("https://jarraga.com", "_blank");
    },
  },
};
</script>

<style>
</style>