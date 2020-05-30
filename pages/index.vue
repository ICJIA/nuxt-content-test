<template>
  <v-container v-if="page && articles">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" @click="click" />
    <h2 class="mt-8">
      Articles
    </h2>
    <div v-for="article in articles" :key="article.title">
      <v-card class="my-3 px-5 py-5" @click="routeToArticle(article.slug)">
        <div style="font-size: 12px; font-weight: 900;">
          {{ moment(article.created).format("MMMM DD, YYYY") }}
        </div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <!-- <div class="mt-4 text-right" style="font-size: 10px;">
          Last updated: {{ article.updatedAtLocal }}
        </div> -->
      </v-card>
    </div>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  async asyncData({ $content }) {
    const page = await $content("index").fetch();
    const articles = await $content("articles")
      .sortBy("created", "desc")
      .fetch();
    return {
      page,
      articles,
    };
  },
  data() {
    return {
      moment,
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
