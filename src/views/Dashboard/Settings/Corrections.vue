<template>
  <h1>Hello Corrections</h1>
  <SearchBar
    :visible="search"
    @close-search-bar="search = false"
    @search="search = false"
  >
    <v-text-field label="Teszt" variant="solo"></v-text-field>
  </SearchBar>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  date() {
    return {
      search: false,
    };
  },
};
</script>

<style>
</style>