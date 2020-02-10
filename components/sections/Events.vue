<template>
  <section id="aboutus" class="section">
    <h1 class="title">EVENTS</h1>
    <ul class="events">
      <li class="event">
        <img
          class="image"
          src="~/assets/events/kittenlt1.png"
          alt="KittenLT1"
        />
        <h1 class="name">KittenLT1</h1>
        <h2 class="subtitle">面白いことは、この世にあふれている。</h2>
        <p class="state">ご来場ありがとうございました</p>
        <p class="description">
          KittenLTは、LTスタイルの勉強会です。<br />
          皆さんが気軽に話題を持ち寄って、発表できるような場を作りたい。<br />
          そういった信念で開催されることになりました 。<br />
          面白いことは、この世にあふれているはずです。
        </p>
        <a class="link" href="https://lt.teamkitten.tk/" target="_blank"
          >公式サイトへ</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  background: #fafafa;
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
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;
}
.event {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image {
  width: 480px;
  max-width: 90%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  margin-bottom: 32px;
  border-radius: 4px;
}
.name {
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #555;
}
.subtitle {
  color: #555;
  font-weight: bold;
  margin-top: 12px;
}
.state {
  border: 2px solid #555;
  color: #555;
  padding: 12px 18px;
  font-weight: bold;
  margin-top: 12px;
}
.description {
  margin-top: 21px;
  line-height: 2;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
}

.link {
  display: block;
  background: #008ffe;
  color: #fff;
  padding: 12px 18px;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
}
</style>
