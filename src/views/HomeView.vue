<script setup lang="ts">
import { ref } from 'vue'

const honors = ref([
  {
    title: 'RoboCup小型组国际赛亚军',
    year: '2012',
    location: '墨西哥',
    rank: 'silver',
    flag: 'mx',
  },
  { title: 'RoboCup小型组国际赛冠军', year: '2013', location: '荷兰', rank: 'gold', flag: 'nl' },
  { title: 'RoboCup小型组国际赛冠军', year: '2014', location: '巴西', rank: 'gold', flag: 'br' },
  {
    title: 'RoboCup小型组伊朗公开赛冠军',
    year: '2017',
    location: '伊朗',
    rank: 'gold',
    flag: 'ir',
  },
  { title: 'RoboCup小型组国际赛季军', year: '2017', location: '日本', rank: 'bronze', flag: 'jp' },
  { title: 'RoboCup小型组国际赛冠军', year: '2018', location: '加拿大', rank: 'gold', flag: 'ca' },
  {
    title: 'RoboCup小型组国际赛冠军',
    year: '2019',
    location: '澳大利亚',
    rank: 'gold',
    flag: 'au',
  },
  {
    title: 'RoboCup小型组中国赛冠军',
    year: '2020',
    location: '中国',
    rank: 'gold',
    flag: 'cn',
    link: 'https://www.bilibili.com/video/BV18p4y1r7Vm/?share_source=copy_web&vd_source=335c5ab3c1b3303bc8d4da8f75fd4d6b',
  },
  {
    title: 'RoboCup小型组国际赛亚军',
    year: '2023',
    location: '法国',
    rank: 'silver',
    flag: 'fr',
    link: 'https://youtu.be/sqgVqkanBa8?si=WHaoB2S4wdPTDo7g',
  },
  {
    title: 'RoboCup小型组国际赛亚军',
    year: '2024',
    location: '荷兰',
    rank: 'silver',
    flag: 'nl',
    link: 'https://youtu.be/364zEAsOclU?si=GGnupZvt6Zms2EFO',
  },
  // 添加更多荣誉...
])

const groups = ref([
  {
    name: '机械组',
    description: '负责机器人机械结构设计与制作',
    icon: 'gear',
  },
  {
    name: '电控组',
    description: '负责机器人电路设计与嵌入式程序开发',
    icon: 'chip',
  },

  {
    name: '策略组',
    description: '场上的指挥官，根据瞬息万变的局势做出此刻的攻防策略',
    icon: 'brain',
  },
  {
    name: '车控组',
    description: '策略的双手，将策略的命令分解为更细小的动作，下发至硬件层执行',
    icon: 'kick',
  },
  {
    name: 'Skill',
    description: '对机器人的每一个动作精确控制',
    icon: 'skill',
  },
])

// const joinUs = {
//   title: '加入我们',
//   description: '如果你对机器人技术充满热情，想要参与国际顶级机器人赛事，欢迎加入ZJUNLICT！',
//   buttonText: '立即申请',
// }

const aboutRoboCup = {
  title: '关于RoboCup SSL',
  description:
    'RoboCup小型组足球机器人比赛（Small Size League，简称SSL）是RoboCup机器人世界杯的重要赛事之一。该赛事要求参赛队伍设计并开发完全自主的机器人足球队，在动态环境中进行5对5的足球比赛。了解更多信息请访问[RoboCup SSL官方网站](https://ssl.robocup.org/)。',
  features: [
    {
      icon: 'mdi-robot',
      title: '全自主机器人',
      description: '机器人完全自主决策，无需人工干预',
    },
    {
      icon: 'mdi-soccer',
      title: '高速比赛',
      description: '比赛节奏快，机器人速度可达4m/s',
    },
    {
      icon: 'mdi-chip',
      title: '实时控制',
      description: '基于实时视觉系统的快速决策',
    },
  ],
}
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">欢迎来到</span>
          <span class="zjunlict-title">ZJUNLICT</span>
        </h1>
        <p class="hero-subtitle">我们是来自浙江大学的ROBOCUP小型组战队</p>
        <div class="cta-buttons">
          <a href="#about-section" class="cta-button primary">了解更多</a>
          <button class="cta-button secondary">观看视频</button>
        </div>
      </div>
      <div class="robot-animation">
        <div class="robot"></div>
      </div>
    </section>

    <!-- 特色展示 -->
    <!-- <section class="features-section">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <img :src="`@/assets/icons/${feature.icon}.svg`" :alt="feature.title" />
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </section> -->

    <!-- 数据统计
      <section class="stats-section">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-number">{{ stat.number }}+</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </section> -->
    <!-- About Section -->
    <section id="about-section" class="about-section">
      <div class="about-container">
        <h2 class="section-title">
          {{ aboutRoboCup.title }}
          <a
            href="https://ssl.robocup.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="external-link"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </a>
        </h2>
        <p class="about-description">{{ aboutRoboCup.description }}</p>

        <div class="features-grid">
          <div v-for="(feature, index) in aboutRoboCup.features" :key="index" class="feature-card">
            <v-icon class="feature-icon">{{ feature.icon }}</v-icon>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 荣誉展示 -->
    <div class="honors-section">
      <h2 class="section-title">荣誉墙</h2>
      <div class="bubbles-container">
        <div class="bubble" v-for="(honor, index) in honors" :key="index">
          <div class="bubble-content">
            <div class="bubble-header">
              <img
                :src="`https://flagcdn.com/24x18/${honor.flag}.png`"
                :alt="honor.location"
                class="flag-icon"
              />
              <v-icon class="medal-icon" :class="honor.rank">
                {{
                  honor.rank === 'gold'
                    ? 'mdi-trophy'
                    : honor.rank === 'silver'
                      ? 'mdi-medal'
                      : 'mdi-medal-outline'
                }}
              </v-icon>
            </div>
            <template v-if="honor.link">
              <a :href="honor.link" target="_blank" rel="noopener noreferrer" class="bubble-title">
                {{ honor.title }}
              </a>
            </template>
            <template v-else>
              <span class="bubble-title">{{ honor.title }}</span>
            </template>
            <div class="bubble-info">
              <span class="bubble-year">{{ honor.year }}</span>
              <span class="bubble-location">{{ honor.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 队伍分组 -->
    <section class="groups-section">
      <h2 class="section-title">我们的团队</h2>
      <div class="groups-container">
        <div v-for="(group, index) in groups" :key="index" class="group-card">
          <div class="group-icon">
            <img :src="`/icons/${group.icon}.svg`" :alt="group.name" />
          </div>
          <h3 class="group-name">{{ group.name }}</h3>
          <p class="group-description">{{ group.description }}</p>
        </div>
      </div>
    </section>

    <!-- Join Us Section -->
    <!-- <section class="join-section">
      <div class="join-container">
        <h2 class="join-title">{{ joinUs.title }}</h2>
        <p class="join-description">{{ joinUs.description }}</p>
        <button class="join-button">
          {{ joinUs.buttonText }}
          <v-icon>mdi-arrow-right</v-icon>
        </button>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.home-page {
  flex: 1;
  background: var(--background-color);
}

.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  background: linear-gradient(135deg, #f0faf7 0%, #d1f2eb 50%, #a3e4d7 100%);
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.title-line {
  display: block;
  animation: slideIn 1s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.8;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  text-decoration: none; /* 去掉链接下划线 */
}

.cta-button.primary {
  background: #00ff88;
  color: #000;
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #00ff88;
  color: #00ff88;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
}

.robot-animation {
  position: relative;
  width: 400px;
  height: 400px;
}

.robot {
  width: 100%;
  height: 100%;
  background: url('@/assets/robot-icon.svg') no-repeat center;
  background-size: contain;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--card-bg);
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.feature-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px var(--shadow-color);
  }
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  color: var(--text-color);
  opacity: 0.8;
  margin-top: 0.5rem;
}

.cta-button {
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    box-shadow: 0 4px 12px var(--shadow-color);
  }
}

.zjunlict-title {
  background: linear-gradient(135deg, #00b4db, #00c853);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 0.2rem 0;
  animation: gradientShift 5s ease infinite;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Arial Rounded MT Bold', sans-serif;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.honors-section {
  padding: 4rem 2rem;
  background: var(--card-bg);
  margin: 4rem 0;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
}

.bubbles-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
}

.bubble {
  position: relative;
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  width: 240px;
  min-height: 140px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  transform: rotate(-2deg);
}

/* 创建错落效果 */
.bubble:nth-child(even) {
  transform: rotate(3deg);
  background: #f0faf7;
}

.bubble:nth-child(3n) {
  transform: rotate(-4deg);
  background: #e3f2fd;
}

.bubble:hover {
  transform: scale(1.05) rotate(0deg);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.bubble::before {
  content: '';
  position: absolute;
  top: -10px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: inherit;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(10deg);
}

.bubble-content {
  position: relative;
  z-index: 1;
}

.bubble-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.flag-icon {
  width: 24px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.medal-icon {
  font-size: 1.5rem;
}

.medal-icon.gold {
  color: #ffd700; /* 金牌颜色 */
}

.medal-icon.silver {
  color: #c0c0c0; /* 银牌颜色 */
}

.medal-icon.bronze {
  color: #cd7f32; /* 铜牌颜色 */
}

.bubble-title {
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.bubble-info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.bubble-location {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
}

.bubble-year {
  font-size: 0.85rem;
  color: rgba(3, 0, 0, 0.9);
}

@media (max-width: 768px) {
  .bubble {
    width: 100%;
    transform: rotate(-1deg) !important;
  }

  .bubble:nth-child(even) {
    transform: rotate(2deg) !important;
  }
}

.wide-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .wide-container {
    padding: 0 20px;
  }
}

.groups-section {
  height: 100vh;
  padding: 4rem 2rem;
  background: #f5f5f5 100%;
  margin-top: 0 auto;
  margin-bottom: 2rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.groups-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.group-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.group-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.group-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
}

.group-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.group-name {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.group-description {
  text-align: center;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
}

.group-members {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.member-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .groups-container {
    grid-template-columns: 1fr;
  }
}

.join-section {
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    #f0faff,
    /* 极浅蓝色 */ #d8f4ff 25%,
    /* 浅蓝色 */ #b3e5fc 50%,
    /* 中等浅蓝 */ #80d8ff 75%,
    /* 淡蓝色 */ #4fc3f7 /* 稍深的淡蓝 */
  );
  color: white;
}

.join-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.join-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.join-description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  opacity: 0.9;
}

.join-button {
  background: white;
  color: #0083b0;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
}

.join-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.join-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .join-section {
    padding: 4rem 1rem;
  }

  .join-title {
    font-size: 2rem;
  }

  .join-description {
    font-size: 1rem;
  }
}

.about-section {
  padding: 6rem 2rem;
  background: var(--background-color);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-color);
  max-width: 800px;
  margin: 2rem auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.feature-description {
  font-size: 1rem;
  color: var(--text-color-secondary);
  line-height: 1.6;
}

.external-link {
  margin-left: 0.5rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.external-link:hover {
  color: var(--primary-color);
}

.external-link .v-icon {
  font-size: 1.2rem;
  vertical-align: middle;
}

.bubble-title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.bubble-title-link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}
</style>
