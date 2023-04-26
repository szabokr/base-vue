<template>
  <h1>{{ showModal }}</h1>

  <SearchBar :visible="showModal">
    <!-- @search="showModal = false" -->
    <v-text-field label="Teszt" variant="solo"></v-text-field>
  </SearchBar>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import { searchBarStore } from "@/store/SearchBarStore";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      showModal: searchBarStore.showModal,
    };
  },
};
</script>