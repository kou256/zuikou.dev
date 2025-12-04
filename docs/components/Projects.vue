<script setup>
const projects = [
  {
    title: 'Bird',
    description: [
      'FlappyBird風のゲーム',
      'Defoldで作成'
    ],
    tags: ['Game', 'Defold'],
    link: 'https://github.com/kou256/Bird'
  },
  {
    title: 'MazeVisualizer',
    description: [
      '暇つぶしに迷路生成アルゴリズムの可視化したもの',
      'C#で作成'
    ],
    tags: ['Algorithm', 'C#', 'Visualization'],
    link: 'https://github.com/kou256/MazeVisualizer'
  },
  {
    title: 'SNAKE-GAME',
    description: [
      'Classic snake game',
      'Built with Python'
    ],
    tags: ['Game', 'Python'],
    link: 'https://github.com/kou256/SNAKE-GAME'
  }
]
</script>

<template>
  <div id="projects" class="projects zdk-section">
    <div class="projects__header zdk-section__header">
      <h2 class="zdk-section__title">Projects</h2>
    </div>

    <div class="projects__grid zdk-grid">
      <a 
        v-for="project in projects" 
        :key="project.title" 
        :href="project.link"
        target="_blank"
        class="project-card zdk-card"
      >
        <h3 class="project-card__title">{{ project.title }}</h3>
        <ul class="project-card__list">
          <li v-for="desc in project.description" :key="desc">{{ desc }}</li>
        </ul>
        <div class="zdk-tags project-card__tags">
          <span
            v-for="(tag, tagIndex) in project.tags"
            :key="tag"
            class="zdk-tag"
            :class="{ 'project-card__tag--primary': tagIndex === 0 }"
          >{{ tag }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.projects__grid {
  --zdk-grid-min: 18.75rem;
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-card__title {
  color: var(--vp-c-brand-1);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.project-card__list {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  flex: 1 1 auto;
}

.project-card__list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.project-card__tags {
  margin-top: auto;
}

.project-card__tag--primary {
  background-color: #dbeafe;
  color: var(--vp-c-brand-1);
}
</style>
