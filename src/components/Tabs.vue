<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="left">
      <v-tab
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        exact
        @click="selectedItem(tab)"
      >
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items>
      <router-view :key="$route.path" />
    </v-tabs-items>
  </v-card>
</template>
    
  <script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tab: "",
    };
  },
  methods: {
    selectedItem(item) {
      this.$router.push({ name: item.router });
    },
  },
};
</script>
    