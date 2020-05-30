<template>
  <v-container v-if="page && articles">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" @click="click" />
    <h2 class="mt-8">
      Articles
    </h2>
    <div v-for="article in articles" :key="article.title">
      <v-card class="my-3 px-5 py-5" @click="routeToArticle(article.slug)">
        <div>posted: {{ article.createdAt }}</div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("index").fetch();
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
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
    click() {
      console.log("click");
    },
  },
};
</script>
