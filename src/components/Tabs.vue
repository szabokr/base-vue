<template>
  <v-tabs v-model="selectedTabIndex" align-tabs="left">
    <v-tab v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)">
      {{ tab.name }}
    </v-tab>
  </v-tabs>

  <router-view />
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
      selectedTabIndex: 0,
    };
  },
  methods: {
    selectTab(item) {
      this.$router.push({ name: item.name });
    },
  },
};
</script>
  