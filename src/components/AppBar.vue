<template>
  <v-app-bar color="grey" flat height="57">
    <v-app-bar-title>{{ this.$route.name }}</v-app-bar-title>

    <template v-slot:append>
      <v-btn
        @click="$emit('open-search-bar'), (showModal = true)"
        icon="mdi-magnify"
      ></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style>
</style>