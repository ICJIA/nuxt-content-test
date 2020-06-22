<template>
  <v-app>
    <v-main>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-toolbar-title class="hover" @click="$router.push('/')">
          Nuxt Content Demo
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon to="/search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <nuxt class="mt-10" />
    </v-main>
  </v-app>
</template>

<style>
.hover {
  cursor: pointer;
}
</style>
