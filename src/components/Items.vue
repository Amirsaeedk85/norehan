<template>
  <div class="container px-4 ">
    <div class="row gx-2 gy-3 ">
      <div class="col-4" v-for="item in items" :key="item.id">
        <div class="card">
          <h6 class="card-header">کالای شماره : {{ item.id }}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              نام کالا : &nbsp;{{ item.category }}
            </li>
            <li class="list-group-item">رنگ کالا : &nbsp;{{ item.color }}</li>
            <li class="list-group-item">سایز کالا : &nbsp;{{ item.size }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  data() {
    return {
      items: []
    };
  },
  methods: {
    fetchUser() {
      fetch("https://norahand.com/api/test/q1/order-detail.json", {
        method: "GET"
      })
        .then(res => res.json())
        .then(json => (this.items = json.items));
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
