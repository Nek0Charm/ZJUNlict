<script setup lang="ts">
import { ref } from 'vue'

const honors = ref([
  { title: 'RoboCup小型组冠军', year: '2013', location: '荷兰' },
  { title: 'RoboCup小型组冠军', year: '2014', location: '巴西' },
  { title: 'RoboCup小型组冠军', year: '2018', location: '加拿大' },
  { title: 'RoboCup小型组冠军', year: '2019', location: '澳大利亚' },
  // 添加更多荣誉...
])

const groups = ref([
  {
    name: '硬件组',
    description: '负责机器人机械结构设计与制作，电路设计与制作以及嵌入式开发',
    icon: 'gear',
    members: ['张三', '李四', '王五'],
  },
  {
    name: '电控组',
    description: '负责机器人电路设计与控制程序开发',
    icon: 'chip',
    members: ['赵六', '孙七', '周八'],
  },
  {
    name: '视觉组',
    description: '负责机器人视觉识别算法开发',
    icon: 'eye',
    members: ['吴九', '郑十', '王十一'],
  },
  {
    name: '策略组',
    description: '负责机器人决策算法与比赛策略制定',
    icon: 'brain',
    members: ['陈十二', '刘十三', '杨十四'],
  },
])
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
          <button class="cta-button primary">了解更多</button>
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

    <!-- 荣誉展示 -->
    <div class="honors-section">
      <div class="bubbles-container">
        <div class="bubble" v-for="(honor, index) in honors" :key="index">
          <div class="bubble-content">
            <span class="bubble-title">{{ honor.title }}</span>
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
            <img :src="`@/assets/icons/${group.icon}.svg`" :alt="group.name" />
          </div>
          <h3 class="group-name">{{ group.name }}</h3>
          <p class="group-description">{{ group.description }}</p>
          <div class="group-members">
            <span v-for="(member, i) in group.members" :key="i" class="member-tag">
              {{ member }}
            </span>
          </div>
        </div>
      </div>
    </section>
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
  width: 220px;
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
  padding: 4rem 2rem;
  background: var(--card-bg);
  margin: 4rem 0;
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
</style>
