<template>
  <div class="container">
    <div class="row">
      <div class="">
        <table
          class="table table-sm table-borderless table-responsive caption-top"
        >
          <caption class="">
            جزییات سفارش :
          </caption>
          <tbody>
            <tr>
              <th scope="row">شماره سفارش</th>
              <td>{{ user.title }}</td>
            </tr>
            <tr>
              <th scope="row">نام</th>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <th scope="row">نام خانوادگی</th>
              <td>{{ user.family }}</td>
            </tr>
            <tr>
              <th scope="row">آدرس</th>
              <td>{{ user.address }}</td>
            </tr>
            <tr>
              <th scope="row">تاریخ و زمان سفارش</th>
              <td>{{ user.orderDate }}</td>
            </tr>
            <tr>
              <th scope="row">تاریخ تحویل</th>
              <td>{{ user.deliverDate }}</td>
            </tr>
            <tr>
              <th scope="row">مجموع خرید</th>
              <td>{{ user.amount }}</td>
            </tr>
            <tr>
              <th scope="row">مالیات</th>
              <td>{{ user.tax }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">قیمت نهایی</th>
              <td>{{ user.totalPrice }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: []
    };
  },
  methods: {
    fetchUser() {
      fetch("https://norahand.com/api/test/q1/order-detail.json", {
        method: "GET"
      })
        .then(res => res.json())
        .then(json => (this.user = json));
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
