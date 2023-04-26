<template>
  <v-navigation-drawer v-model="this.visible" location="right">
    <v-list-item>
      <v-icon icon="mdi-magnify"></v-icon>
      Keresés
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-close"
          @click="$emit('close-search-bar')"
          @click.stop="search = !search"
        ></v-btn>
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
    };
  },
};
</script>
  
  <style>
</style>