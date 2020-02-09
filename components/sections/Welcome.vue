<template>
  <section class="section">
    <img class="logo" src="~assets/icon.svg" alt="logo" />
    <h1 class="title">TeamKitten</h1>
    <p class="subtitle">
      「面白い」ことをしたい人が集まる<br />コミュニティです。
    </p>
    <a v-smooth-scroll="{ duration: 1000 }" class="arrowLink" href="#aboutus">
      <img src="~/assets/arrow.svg" alt="下へ" />
    </a>
  </section>
</template>

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
.logo {
  width: 120px;
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
.arrowLink {
  position: absolute;
  width: 64px;
  height: auto;
  bottom: 32px;
  animation: 1s arrow forwards;
}
@keyframes arrow {
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
