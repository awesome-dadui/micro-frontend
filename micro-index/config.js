window.appConfig = [
  {
    path: 'app1/home',
    name: '首页',
  },
  {
    path: 'app2/user',
    name: '用户',
    children: [
      {
        path: '/foo/profile',
        name: '用户简况'
      },
      {
        path: '/foo/posts',
        name: '用户邮件'
      }
    ]
  }
]