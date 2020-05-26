<template>
  <div>
    <div v-if="article && !error">
      {{ $route.params.slug }}
      <p>{{ article }}</p>
    </div>
    <!-- <div v-else class="mt-12 text-center">
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
    </div>-->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles")
      .where({ slug: params.slug })
      .fetch();
    const error = article.length ? false : true;
    return {
      article,
      error,
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
