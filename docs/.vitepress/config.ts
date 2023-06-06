import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zuikou.dev",
  description: "kou256のポートフォリオサイト",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/about-me' },
      { text: 'Projects', link: '/projects' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kou256' },
      { icon: 'mastodon', link: 'https://mstdn.sublimer.me/@KOU256'}
    ]
  }
})
