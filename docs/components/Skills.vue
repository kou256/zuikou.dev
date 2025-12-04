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
  <div id="skills" class="skills zdk-section">
    <div class="skills__header zdk-section__header">
      <h2 class="zdk-section__title">Skills & Experience</h2>
      <p class="zdk-section__subtitle">A brief overview of my technical abilities.</p>
    </div>

    <div class="skills__categories">
      <div v-for="category in skillCategories" :key="category.title" class="skills__category">
        <h3 class="skills__category-title">{{ category.title }}</h3>
        <div class="skills__grid zdk-grid">
          <div v-for="skill in category.items" :key="skill.name" class="skills__card zdk-card">
            <div class="skills__card-content">
              <div class="skills__icon-wrapper">
                <i :class="[skill.icon, 'skills__icon']"></i>
              </div>
              <div class="skills__info">
                <span class="skills__name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills__categories {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.skills__category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 2rem;
  border: none;
}

.skills__grid {
  --zdk-grid-min: 18rem;
}

.skills__card {
  border: 1px solid transparent;
}

.skills__card:hover {
  border-color: var(--vp-c-brand-1);
}

.skills__card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skills__icon-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
}

.skills__icon {
  font-size: 2.5rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s ease;
}

.skills__card:hover .skills__icon {
  color: var(--vp-c-brand-1);
}

.skills__info {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.skills__name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}
</style>

