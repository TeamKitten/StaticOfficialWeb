<template>
  <section id="aboutus" class="section">
    <h1 class="title">PROJECTS</h1>
    <ul class="projects">
      <li class="project">
        <img
          class="image"
          src="~/assets/projects/blog.png"
          alt="TeamKitten Blog"
        />
        <h1 class="name">Blog</h1>
        <h2 class="subtitle">TeamKitten独自ブログ</h2>
        <p class="state">公開中</p>
        <p class="description">
          JAMstackで構築したTeamKittenの独自ブログ。<br />
          書かれてることは割と自由です。
        </p>
        <a class="link" href="https://blog.teamkitten.tk/" target="_blank"
          >読んでみる</a
        >
      </li>
      <li class="project">
        <img
          class="image"
          src="~/assets/projects/notenote.png"
          alt="NoteNote"
        />
        <h1 class="name">NoteNote</h1>
        <h2 class="subtitle">使いやすく、デプロイしやすいノートツール</h2>
        <p class="state">開発中</p>
        <p class="description">
          A easy to use/deploy notebook system.<br />
          オンプレ前提のノートブックプロジェクト。<br />
          セットアップは簡単。すぐに使えます。
        </p>
        <a
          class="link"
          href="https://github.com/TeamKitten/NoteNote"
          target="_blank"
          >開発進捗を確認</a
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
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 64px;
}
.image {
  max-width: 90%;
  max-height: 480px;
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
