<template>
  <div class="container">
    <Header />
    <table class="table table-striped  table-hover caption-top">
      <caption>
        سوابق خرید :
      </caption>
      <thead>
        <tr>
          <th scope="col">ردیف</th>
          <th scope="col">عنوان</th>
          <th scope="col">مبلغ</th>
          <th scope="col">تاریخ سفارش</th>
          <th scope="col">زمان سفارش</th>
          <th scope="col">وضعیت</th>
          <th scope="col">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in userOrders" :key="order.id">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.title }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.time }}</td>
          <td>{{ order.status }}</td>
          <td>
            <router-link to="/detail" class="btn btn-primary"
              >تکمیل سفارش</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  data() {
    return {
      userOrders: {}
    };
  },
  methods: {
    fetchUserOrders() {
      fetch("https://norahand.com/api/test/q1/order-history.json", {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.userOrders = json));
    }
  },
  created() {
    this.fetchUserOrders();
  },

  components: {
    Header
  }
};
</script>

<style></style>
