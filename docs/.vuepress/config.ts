import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'
import notes from './notes'

export default defineUserConfig({

  head: [
    ['link', {rel: 'icon', href: '/img/logo.png'}]
  ],

  bundler: viteBundler(),

  theme: plumeTheme({
    navbar:[
        {text: '首页', link: '/'},
        {text: '关于我们', link: '/about.md'},
        {text: '技术文档', link: '/notes/docs/README.md'},
        {text: '更多链接', link: '/friends.md'},
    ],
    autoFrontmatter: false,
    notes
  }),

  lang: 'zh-CN',
  title: 'ZJUNlict',
  description: 'the website of ZJUNlict',


})