<script setup>
const skillCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'C', icon: 'devicon-c-plain' },
      { name: 'C++', icon: 'devicon-cplusplus-plain' },
      { name: 'C#', icon: 'devicon-csharp-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Unity', icon: 'devicon-unity-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'wxPython', icon: 'devicon-python-plain' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain' },
    ]
  },
  {
    title: 'Tools & Technologies',
    items: [
      { name: 'Firebase', icon: 'devicon-firebase-plain' },
      { name: 'Azure', icon: 'devicon-azure-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
      { name: 'Raspberry Pi', icon: 'devicon-raspberrypi-line' },
    ]
  }
]
</script>

<template>
  <div id="skills" class="skills-container">
    <div class="header">
      <h2>Skills & Experience</h2>
      <p class="subtitle">A brief overview of my technical abilities.</p>
    </div>

    <div class="categories">
      <div v-for="category in skillCategories" :key="category.title" class="category">
        <h3>{{ category.title }}</h3>
        <div class="grid">
          <div v-for="skill in category.items" :key="skill.name" class="card">
            <div class="card-content">
              <div class="icon-wrapper">
                <i :class="[skill.icon, 'icon']"></i>
              </div>
              <div class="info">
                <span class="name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  padding: 4rem 1.5rem;
  max-width: 1152px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border: none;
  background: -webkit-linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  padding: 0.2em 0;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background-color: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s, background-color 0.2s;
  border: 1px solid transparent;
}

.card:hover {
  transform: translateY(-2px);
  background-color: var(--vp-c-bg-soft-up);
  border-color: var(--vp-c-brand-1);
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
}

.icon {
  font-size: 2.5rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.card:hover .icon {
  color: var(--vp-c-brand-1);
}

.info {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}
</style>


