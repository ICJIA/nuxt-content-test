<template>
  <div v-if="!error">
    <v-container>
      {{ $route.params.slug }}
      <p>{{ article[0] }}</p>
      Rendered:
      <div>
        <nuxt-content :document="article[0]" />
      </div>
      <!-- <div v-else class="mt-12 text-center">
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
      </div>-->
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $content, params }) {
    const article = await $content("articles")
      .where({ slug: params.slug })
      .fetch();
    const error = article.length ? false : true;
    const page = await $content("index").fetch();
    return {
      article,
      error,
      page,
    };
  },
  created() {
    if (this.error) {
      this.$router.push("/404");
    }
  },
};
</script>

<style lang="scss" scoped></style>
