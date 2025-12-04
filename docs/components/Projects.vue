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
  <div id="projects" class="projects-container">
    <div class="header">
      <h2>Projects</h2>
    </div>
    
    <div class="grid">
      <a 
        v-for="project in projects" 
        :key="project.title" 
        :href="project.link"
        target="_blank"
        class="card"
      >
        <h3>{{ project.title }}</h3>
        <ul>
          <li v-for="desc in project.description" :key="desc">{{ desc }}</li>
        </ul>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 4rem 1.5rem;
  max-width: 1152px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border: none;
  background: -webkit-linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  padding: 0.2em 0;
}

.subtitle {
  color: var(--vp-c-text-2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none !important;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--vp-c-bg-soft);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  background-color: var(--vp-c-bg-soft-up);
}

.card h3 {
  color: var(--vp-c-brand-1);
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 1rem;
}

.card ul {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  flex-grow: 1;
}

.card li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #e0e0e0; /* Light gray */
  color: #333;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Specific tag colors if needed, but generic gray seems to be in the image for some, blueish for others */
.tag:first-child {
  background-color: #dbeafe;
  color: var(--vp-c-brand-1);
}

/* Dark mode adjustments handled by var(--vp-*) variables mostly, but fixed colors might need media queries or CSS variables if we want to be perfect. 
   For now, I'll stick to simple colors.
*/
</style>
