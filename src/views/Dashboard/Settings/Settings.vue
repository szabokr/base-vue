<template>
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
  <router-view />
</template>
  <script>
export default {
  data() {
    return {
      tab: 1,
      tabs: [
        { name: "Paraméterek", path: "/params" },
        { name: "Gyümölcsök", path: "/fruits" },
        { name: "Korrekciók", path: "/corrections" },
      ],
    };
  },
  methods: {
    selectedItem(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
  
  <style>
</style>