<template>
  <v-navigation-drawer v-model="search" location="right">
    <v-list-item>
      <v-icon icon="mdi-magnify"></v-icon>
      Keresés
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-close" @click="openSearchBar"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <slot></slot>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="$emit('search')"> Keresés </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
  
  <script>
import { searchBarStore } from "@/store/SearchBarStore";
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      search: false,
      search: this.visible,
    };
  },

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
  
  <style>
</style>