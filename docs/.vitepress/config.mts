import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 项目打包路径
  base: '/moper-web/',
  lang: 'zh-CN',
  title: "Moper前端",
  description: "一个个人前端学习网站",
  head: [['link',{ rel: 'icon', href: '/Moper.png'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 2,
    outlineTitle: '当前页导航',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '作者', link: '/Author'},
      { text: '前端自定义组件', link: '/Components/Theme' },
      { text: 'HTML', link: '/HTMLStudy'},
      { text: 'CSS', link: '/CSSStudy/overflow'},
      { text: 'JS/TS', link: '/JSTSStudy'}
    ],
    sidebar: {
      // 组件页面下的侧边栏
      '/Components': [
        {
          text: '基础主题样式',
          link: '/Components/Theme'
        },
        {
          text:'按钮',
          items:[
            { text: '基础样式', link: '/Components/Button/Theme'},
            { text: '悬浮动画', link: '/Components/Button/LevitationAnimation/index'},
            { text: '点击动画', link: '/Components/Button/OnClick/index'}
          ]
        },
        {
          text: '文本',
          link: '/Components/Text/index'
        },
        {
          text: '开关',
          link: '/Components/Switch/index'
        },
        {
          text: '卡片',
          items: [
            { text: '基础样式', link: '/Components/Card/Theme'},
            { text: '普通卡片', link: '/Components/Card/index'}
          ]
        },
        {
          text: '加载',
          items: [
            { text: '普通加载', link: '/Components/Loading/Loading/index'},
            { text: '进度条', link: '/Components/Loading/Progress/index'}
          ]
        },
        {
          text: '菜单',
          items: [
            { text: '基础样式', link: '/Components/Menu/Theme'},
            { text: '普通菜单', link: '/Components/Menu/index'}
          ]
        },
        {
          text: '弹出框',
          items: [
            { text: '抽屉', link: '/Components/Popover/Drawer/index'}
          ]
        },
        {
          text: '其他',
          link: '/Components/Others/index'
        }
      ],
      // HTML页面下的侧边栏
      '/HTMLStudy': [
        {
          text:'测试',
          items:[
            { text: '测试1', link: '/HTMLStudy/test1'}
          ]
        }
      ],
      // CSS页面下的侧边栏
      '/CSSStudy': [
        {
          items:[
            { text: 'overflow', link: '/CSSStudy/overflow'},
            { text: 'position', link: '/CSSStudy/position'},
            { text: 'transition', link: '/CSSStudy/transition'},
            { text: 'z-index', link: '/CSSStudy/z-index'},
          ]
        }
      ]
    },
    footer: {
      message: '此网站仅为个人学习使用，并不具备权威性，在一些具体代码和讲解中可能存在错误，需要自行分辨。如果在你前端学习的过程中，本网站对你有所帮助，那么Moper很高兴，也很荣幸你会发现这个网站。',
      copyright: 'Copyright © 2023-present Moper'
    }
  }
})
