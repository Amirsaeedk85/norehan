<template>
  <div class="container">
    <table class="table table-primary caption-top">
      <caption>
        مشخصات کاربر :
      </caption>
      <thead>
        <tr>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>جنسیت</th>
          <th>تلفن</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    fetchUser() {
      fetch("https://norahand.com/api/test/q1/user.json", {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.user = json));
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
