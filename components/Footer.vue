<template>
  <footer class="footer">
    <p>Copyright &copy; 2018-{{ year }} TeamKitten</p>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 32px;
  color: #555;
  font-weight: bold;
}
</style>
