<template>
  <v-container v-if="page && articles">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    {{ articles }}
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    const articles = await $content("articles").sortBy("title").fetch();
    return {
      page,
      articles,
    };
  },
};
</script>
