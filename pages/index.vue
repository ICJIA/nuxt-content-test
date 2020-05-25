<template>
  <v-container v-if="page && articles">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <div v-for="article in articles" :key="article.title">
      <v-card class="my-3 px-5 py-5" @click="routeToArticle(article.slug)">
        <div>posted: {{ article.created }}</div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    const articles = await $content("articles")
      .sortBy("created", "desc")
      .fetch();
    return {
      page,
      articles,
    };
  },
  methods: {
    routeToArticle(slug) {
      if (!slug) return;
      this.$router.push(`articles/${slug}`);
    },
  },
};
</script>
