<template>
  <div>
    <user-item v-for="user in users" :key="user.id" :user="user"></user-item>
  </div>
</template>
  
  <script>
import UserItem from "./UserItem.vue";

export default {
  name: "HomePage",
  components: { UserItem },
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.users = users;
      });
  },
};
</script>