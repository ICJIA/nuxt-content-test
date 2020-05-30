<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Test Search</h1>
          <v-text-field
            v-model="q"
            autocomplete="new"
            label="Search articles"
            @input="$fetch"
          />
          <div v-if="q.length && articles.length">
            <pre>{{ articles }}</pre>
          </div>
          <div v-if="!q.length && !articles.length" class="text-center">
            <h2>Enter search term</h2>
          </div>
          <div v-if="!articles.length && q.length" class="text-center">
            <h2>No results</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable vue/html-self-closing */
export default {
  async fetch() {
    if (this.q.length) {
      this.articles = await this.$content("articles")
        .only(["title", "summary", "path", "createdAt"])
        .search(this.q)
        .fetch();
    }
  },
  data() {
    return {
      articles: [],
      q: "",
    };
  },
};
</script>
