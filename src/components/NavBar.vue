<script setup lang="ts">
const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '比赛视频', path: '/videos' },
  { name: '联系我们', path: '/contact' },
]
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="战队Logo" />
      <span>RoboCup 小型组战队</span>
    </div>
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.path">
        <router-link :to="item.path">
          <span class="link-text">{{ item.name }}</span>
          <span class="link-underline"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo img {
  height: 40px;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-list a {
  position: relative;
  padding: 0.5rem 0;
}

.link-text {
  position: relative;
  z-index: 2;
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #00ff88;
  transition: width 0.3s ease;
}

.nav-list a:hover .link-underline {
  width: 100%;
}

.nav-list a.router-link-exact-active .link-underline {
  width: 100%;
}
</style>
