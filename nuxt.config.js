export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*a
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/vuetify.js", "~/plugins/global-component-loader.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // TODO: Remove when upgrading to nuxt 2.13+
    //"@nuxt/components",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxt/content",
    "nuxt-compress",
  ],
  "nuxt-compress": {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
  content: {
    fullTextSearchFields: ["title", "summary", "slug"],
  },
  generate: {
    // async routes() {
    //   const { $content } = require("@nuxt/content");
    //   const files = await $content("articles").only(["path"]).fetch();
    //   return files.map((file) => {
    //     return file.path;
    //   });
    // },
  },
  hooks: {
    "content:file:beforeInsert": (document) => {
      if (document.extension === ".md") {
        document.markdown = document.text;
      }
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {},
  },
};
