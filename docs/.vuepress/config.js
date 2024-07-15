import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: "zh-cn", //设置整体语言会被单个文件上方面标题覆盖
  title: "helloooo",//最上面标题会被单个文件上方面标题覆盖
  head: [['link', {rel:'icon' ,href: ''}]],//在<head>标签中添加的属性
})