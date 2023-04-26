<template>
  <h1>Hello Fruits</h1>

  <SearchBar
    @open-search-bar="search = !search"
    :visible="search"
    @close-search-bar="search = false"
    @search="search = false"
  ></SearchBar>
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