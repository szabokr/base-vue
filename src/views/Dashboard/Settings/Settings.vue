<template>
  <Tabs :tabs="tabs"></Tabs>
</template>
  
  <script>
import Tabs from "@/components/Tabs.vue";
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabs: [
        { name: "Paraméterek" },
        { name: "Gyümölcsök" },
        { name: "Korrekciók" },
      ],
    };
  },
};
</script>
  