<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="grey-darken-3"></v-system-bar> -->
      <Sidebar
        :title="title"
        :logo="logo"
        :items="items"
        :userPermissions="userPermissions"
      ></Sidebar>
      <!-- Todo ezt kellene kivinni minden egyes vueba mert ugye ez változhat -->
      <AppBar
        @open-search-bar="search = !search"
        @click="$emit('open-search-bar')"
      ></AppBar>
      <SearchBar
        @open-search-bar="search = !search"
        :visible="search"
        @close-search-bar="search = false"
        @search="search = false"
      ></SearchBar>

      <v-main style="height: 100%">
        <router-view></router-view>
      </v-main>

      <Footer></Footer>
    </v-layout>
  </v-card>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";
import Footer from "@/components/Footer.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: { Sidebar, AppBar, Footer, SearchBar },
  data() {
    return {
      search: false,
      title: "Teszt",
      logo: "https://randomuser.me/api/portraits/men/85.jpg",
      userPermissions: ["user", "settings"],
      items: [
        {
          title: "Beállítások",
          router: "Érzékenységek",
          icon: "mdi-cog",
          permission: "settings",
        },
        {
          title: "Home",
          icon: "mdi-home-city",
          permission: "user",
          router: "Menük",
        },
        {
          title: "Felhasználók",
          icon: "mdi-account-group-outline",
          permission: "user",
          router: "Home",
        },

        {
          title: "Bérfőzés",
          icon: "mdi-account-group-outline",
          permission: "user",
          router: "Home",
        },
        {
          title: "Raktár",
          icon: "mdi-store",
          permission: "user",
          router: "Home",
        },
        {
          title: "Statisztika",
          icon: "mdi-account-group-outline",
          permission: "user",
          router: "Home",
        },
        {
          title: "Eladott termék",
          icon: "mdi-account-group-outline",
          permission: "user",
          router: "Home",
        },
      ],
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
      console.log(search);
      this.$router.push({ name: item.router });
    },
  },
};
</script>
  
  <style>
</style>
  
