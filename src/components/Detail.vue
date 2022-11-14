<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <User />
      </div>
      <div class="col-6">
        <Items />
      </div>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import Items from "./Items.vue";
export default {
  components: {
    User,
    Items
  }
};
</script>

<style></style>
