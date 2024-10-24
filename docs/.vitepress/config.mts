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
      { icon: 'mastodon', link: 'https://mstdn.sublimer.me/@KOU256'},
      {icon: {
        // https://www.svgrepo.com
        svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pleroma icon</title><path d="M6.36 0A1.868 1.868 0 004.49 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 001.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 001.868-1.868v-4.096Z"/></svg>',
      },
      link: 'https://pleroma.zuikou.dev/users/kou256' }
    ]
  }
})
