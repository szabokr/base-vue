<template>
  <v-app-bar color="grey" flat height="57">
    <v-app-bar-title>{{ this.$route.name }}</v-app-bar-title>

    <template v-slot:append>
      <v-btn @click="openSearchBar" icon="mdi-magnify"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { searchBarStore } from "@/store/SearchBarStore";

export default {
  setup() {
    function openSearchBar() {
      searchBarStore.showModal = !searchBarStore.showModal;
      console.log(searchBarStore.showModal);
    }

    return {
      openSearchBar,
    };
  },
};
</script>