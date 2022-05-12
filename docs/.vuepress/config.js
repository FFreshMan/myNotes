module.exports = {
  title: 'ffreshman 的笔记',
  description: '一个简约实用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/'},
      {text: 'github', link: 'https://github.com/FFreshMan/'},
    ],
    sidebar: [
      {
        title: '自动化测试',
        children: [
          '/install/',
          '/get-started/',
        ]
      }
    ]
  }
}