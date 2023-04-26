<template>
  <v-navigation-drawer :rail="rail" permanent @click="rail = false">
    <v-list-item :prepend-avatar="this.logo" :title="this.title" nav>
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in filteredItems"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title.toLowerCase()"
        @click="selectedItem(item)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    userPermissions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rail: true,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        this.userPermissions.includes(item.permission)
      );
    },
  },
  methods: {
    selectedItem(item) {
      this.$router.push({ name: item.router });
    },
  },
};
</script>

  