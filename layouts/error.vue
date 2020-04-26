<template>
  <div>
    <app-header />
    <section class="section">
      <h1 class="title">404 Not Found</h1>
      <p class="subtitle">お探しのページは見つかりませんでした。</p>
      <nuxt-link class="link" to="/">トップへ</nuxt-link>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
}
.title {
  color: #707070;
  font-size: 2rem;
  margin-top: 24px;
  font-weight: bold;
  text-align: center;
}
.subtitle {
  text-align: center;
  color: #707070;
  margin-top: 4px;
  line-height: 1.5;
}
.link {
  text-align: center;
  color: #707070;
  margin-top: 16px;
  line-height: 1.5;
  font-weight: bold;
}
</style>
